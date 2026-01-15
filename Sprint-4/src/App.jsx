import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainPage } from './components/MainPage/MainPage';
import { ItemsPage } from './components/ItemsPage/ItemsPage';
import { RegistrationPage } from './components/RegistrationPage/RegistrationPage';
import { ProductDetailPage } from './components/ItemsPage/ProductDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />

        <Route path="/items/:productId" element={<ProductDetailPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
