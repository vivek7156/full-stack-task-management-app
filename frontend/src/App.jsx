import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login/LoginPage';
import MenuPage from './pages/menu/MenuPage';
import OrderPage from './pages/order/OrderPage';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;