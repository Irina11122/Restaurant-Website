import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import './css/Fonts.css';
import MenuPage from './pages/MenuPage';
import { Route, Router, Routes } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import PayPage from './pages/PayPage';
export default function App() {
  return (
    <div className="h-full">
      {' '}
      <CartProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="/pay" element={<PayPage />} />
        </Routes>
      </CartProvider>
    </div>
  );
}
