import { BrowserRouter, Routes, Route } from 'react-router';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { MainPage } from './components/MainPage/MainPage';
import { ItemsPage } from './components/Items/ItemsPage';
import { RegistrationPage } from './components/RegistrationPage/RegistrationPage';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
