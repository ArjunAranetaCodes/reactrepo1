import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import EcommerceTopbar from './components/navbars/EcommerceTopbar';
import EcommerceNavbar from './components/navbars/EcommerceNavbar';
import PortfolioHeader from './components/PortfolioHeader';
import Portfolio from './pages/Portfolio';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import './App.css';

function AppLayout() {
  const location = useLocation();
  const isShop = location.pathname.startsWith('/shop');

  return (
    <>
      {isShop ? (
        <>
          <EcommerceTopbar />
          <EcommerceNavbar />
          <main style={{ minHeight: '100vh' }}>
            <Outlet />
          </main>
          <Footer />
        </>
      ) : (
        <>
          <PortfolioHeader />
          <main className="portfolio-main">
            <Outlet />
          </main>
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Portfolio />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/cart" element={<Shop />} />
            <Route path="/shop/checkout" element={<Shop />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
