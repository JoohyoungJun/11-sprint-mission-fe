import likeIcon from '../../assets/icons/like.svg'; // './assets/icons/like.svg'
import { useState, useEffect } from 'react';
import { priceFormat } from '../../utils/format';

export function BestProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams({
      page: 1,
      pageSize: 4,
      orderBy: 'favorite',
    });

    const getBestProducts = async () => {
      const res = await fetch(
        `https://panda-market-api.vercel.app/products?${params.toString()}`
      );

      const data = await res.json();
      setProducts(data.list);
      console.log(data.list);
    };

    getBestProducts();
  }, []);

  console.log(products);

  return (
    <>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img
                src={product.images[0]}
                alt="image.png"
                width={282}
                height={282}
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
