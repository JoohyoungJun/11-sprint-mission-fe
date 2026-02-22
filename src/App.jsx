import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainPage } from './components/MainPage/MainPage';
import { ItemsPage } from './components/ItemsPage/ItemsPage';
import { RegistrationPage } from './components/RegistrationPage/RegistrationPage';
import { ProductDetailPage } from './components/ItemsPage/ProductDetailPage';
import { LoginPage } from './components/Login/LoginPage';
import { SignupPage } from './components/Signup/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />

        <Route path="/items/:productId" element={<ProductDetailPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
