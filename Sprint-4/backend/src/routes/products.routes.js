import express from 'express';
import { Product } from '../models/product.model.js';
import { BadRequestException } from '../errors/badRequestException.js';
import { NotFoundException } from '../errors/notFoundException.js';

export const productsRouter = express.Router();

// GET - /products - 모든 상품 불러오기
// 이 함수의 동작 원리가 이해가 안가요...
productsRouter.get('/', async (req, res, next) => {
  try {
    const page = Number(req.query.page ?? 1);
    const pageSize = Number(req.query.pageSize ?? 10);
    const keyword = String(req.query.keyword ?? '');
    const orderBy = String(req.query.orderBy ?? 'recent');

    const filter = keyword
      ? {
          $or: [
            { name: { $regex: keyword, $options: 'i' } },
            { description: { $regex: keyword, $options: 'i' } },
          ],
        }
      : {};

    const sort = orderBy === 'recent' ? { createdAt: -1 } : { createdAt: -1 };
    const skip = (page - 1) * pageSize;

    const [docs, totalCount] = await Promise.all([
      Product.find(filter).sort(sort).skip(skip).limit(pageSize),
      Product.countDocuments(filter),
    ]);

    res.json({
      list: docs.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        createdAt: p.createdAt,
      })),
      totalCount,
    });
  } catch (e) {
    console.error('error: ', e);
    next(e);
  }
});

// POST /products - 상품 생성하기
productsRouter.post('/', async (req, res, next) => {
  try {
    const { name, description, price, tags } = req.body;

    if (!name || !description || price === undefined || tags === undefined) {
      throw new BadRequestException('필드 입력이 잘못되었습니다.');
    }

    const product = await Product.create({
      name,
      description,
      price,
      tags,
    });

    res.status(201).json({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      tags: product.tags,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  } catch (e) {
    console.error('error: ', e);
    next(e);
  }
});

/**
 * GET /products/:productId
 * 상세 요구사항: id, name, description, price, tags, createdAt
 */
productsRouter.get('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (!product) {
      throw new NotFoundException('상품을 찾을 수 없습니다.');
    }

    res.status(200).json({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      tags: product.tags,
      createdAt: product.createdAt,
    });
  } catch (e) {
    console.error('error: ', e);
    next(e);
  }
});

// PATCH /products/:productId - 특정 상품 수정
productsRouter.patch('/:productId', async (req, res, next) => {
  try {
    const { name, description, price, tags } = req.body;

    if (
      name === undefined &&
      description === undefined &&
      price === undefined &&
      tags === undefined
    ) {
      throw new BadRequestException('수정할 필드가 없습니다.');
    }

    const product = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );

    if (!product) {
      throw new NotFoundException('요청한 상품을 찾을 수 없습니다.');
    }

    res.status(200).json({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      tags: product.tags,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    });
  } catch (e) {
    console.error('error: ', e);
    next(e);
  }
});

// DELETE /products/:productId - 특정 상품 삭제
productsRouter.delete('/:productId', async (req, res, next) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.productId);

    if (!product) {
      throw new NotFoundException('요청한 상품을 찾을 수 없습니다.');
    }

    res.status(200).json({ success: true });
  } catch (e) {
    console.error('error: ', e);
    next(e);
  }
});
