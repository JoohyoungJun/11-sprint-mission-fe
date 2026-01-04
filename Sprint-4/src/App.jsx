import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BestProductList } from './components/BestProductList';
import likeIcon from './assets/icons/like.svg';
import { ProductListSection } from './components/ProductListSection';

function App() {
  return (
    <>
      <Header />
      <main className="grow max-w-300 mx-auto mt-[26px]">
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
      </main>
      <Footer />
    </>
  );
}

export default App;
