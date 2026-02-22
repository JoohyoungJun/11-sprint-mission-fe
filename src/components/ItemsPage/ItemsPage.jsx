import { BestProductList } from './BestProductList';
import { ProductListSection } from './ProductListSection';

export function ItemsPage() {
  return (
    <div className="grow max-w-300 mx-auto mt-[26px]">
      <h1 className="sr-only">중고마켓 - 판다마켓</h1>
      <section>
        <h2 className="text-[#111827] font-bold text-[20px] leading-8">
          베스트 상품
        </h2>
        <BestProductList />
      </section>
      <section className="mt-[40px]">
        <ProductListSection />
      </section>
    </div>
  );
}
