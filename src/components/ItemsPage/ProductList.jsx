import likeIcon from '../../assets/icons/like.svg';
import { priceFormat } from '../../utils/format';

export function ProductList({ products }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-4">
      {products.map((product) => (
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
            <div className="text-[12px] text-[#4B5563] flex items-center gap-1">
              <img src={likeIcon} alt="좋아요" /> {product.favoriteCount}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
