import likeIcon from '../assets/icons/like.svg'; // './assets/icons/like.svg'
import { useState, useEffect } from 'react';
import { priceFormat } from '../utils/format';

export function ProductList({ orderBy, keyword }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getBestProducts = async () => {
      const params = new URLSearchParams({
        page: 1,
        pageSize: 10,
        orderBy,
        keyword,
      });

      const res = await fetch(
        `https://panda-market-api.vercel.app/products?${params.toString()}`
      );

      const data = await res.json();
      setProducts(data.list);
      console.log(data.list);
    };

    getBestProducts();
  }, [orderBy, keyword]);

  console.log(products);

  return (
    <>
      <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img
                src={product.images[0]}
                alt="thumbnail"
                width={221}
                height={221}
                className="aspect-square rounded-[16px]"
              />
              <div className="flex flex-col gap-1.5 mt-4 text-[#1f2937]">
                <h3 className="text-[14px]">{product.name}</h3>
                <span className="font-bold">{priceFormat(product.price)}</span>
                <div className="text-[12px] text-[#4B5563]">
                  <img src={likeIcon} alt="좋아요" /> {product.favoriteCount}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
