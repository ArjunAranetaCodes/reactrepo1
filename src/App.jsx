import { BrowserRouter, Routes, Route, useLocation, Outlet, Navigate } from 'react-router-dom';
import EcommerceTopbar from './components/navbars/EcommerceTopbar';
import EcommerceNavbar from './components/navbars/EcommerceNavbar';
import PortfolioHeader from './components/PortfolioHeader';
import Portfolio from './sites/portfolio';
import Shop from './pages/Shop';
import Shop2Page from './sites/shop2/Shop2Page';
import Shop3Page from './sites/shop3/Shop3Page';
import Shop4Page from './sites/shop4/Shop4Page';
import { BrenoWebsite } from './sites/company-website';
import { TravelSite } from './sites/travel-site';
import Services1Page from './sites/services1/Services1Page';
import Services2Page from './sites/services2/Services2Page';
import Services3Page from './sites/services3/Services3Page';
import Footer from './components/Footer';
import { shopSlugs } from './sites/shops';
import './App.css';

function AppLayout() {
  const location = useLocation();
  const pathSeg = location.pathname.split('/')[1];
  const isShop2 = pathSeg === 'shop2';
  const isShop3 = pathSeg === 'shop3';
  const isShop4 = pathSeg === 'shop4';
  const isCompanyWebsite = pathSeg === 'company-website';
  const isTravelSite = pathSeg === 'travel-site';
  const isServices1 = pathSeg === 'services1';
  const isServices2 = pathSeg === 'services2';
  const isServices3 = pathSeg === 'services3';
  const isShop = shopSlugs.includes(pathSeg);

  /* Shop 2, shop3, shop4, company website, travel site, services1, services2, services3 use their own layout */
  if (isShop2 || isShop3 || isShop4 || isCompanyWebsite || isTravelSite || isServices1 || isServices2 || isServices3) {
    return <Outlet />;
  }

  if (isShop) {
    return (
      <>
        <EcommerceTopbar />
        <EcommerceNavbar />
        <main style={{ minHeight: '100vh' }}>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <PortfolioHeader />
      <main className="portfolio-main">
        <Outlet />
      </main>
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
            <Route path="/shop" element={<Navigate to="/shop1" replace />} />
            <Route path="/shop/cart" element={<Navigate to="/shop1/cart" replace />} />
            <Route path="/shop/checkout" element={<Navigate to="/shop1/checkout" replace />} />
            <Route path="/shop2" element={<Shop2Page />} />
            <Route path="/shop2/cart" element={<Shop2Page />} />
            <Route path="/shop2/checkout" element={<Shop2Page />} />
            <Route path="/shop3" element={<Shop3Page />} />
            <Route path="/shop3/cart" element={<Shop3Page />} />
            <Route path="/shop3/checkout" element={<Shop3Page />} />
            <Route path="/shop4" element={<Shop4Page />} />
            <Route path="/shop4/cart" element={<Shop4Page />} />
            <Route path="/shop4/checkout" element={<Shop4Page />} />
            <Route path="/company-website" element={<BrenoWebsite />} />
            <Route path="/travel-site" element={<TravelSite />} />
            <Route path="/services1" element={<Services1Page />} />
            <Route path="/services2" element={<Services2Page />} />
            <Route path="/services3" element={<Services3Page />} />
            {shopSlugs.filter((s) => s !== 'shop2' && s !== 'shop3' && s !== 'shop4').map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<Shop />} />
            ))}
            {shopSlugs.filter((s) => s !== 'shop2' && s !== 'shop3' && s !== 'shop4').map((slug) => (
              <Route key={`${slug}-cart`} path={`/${slug}/cart`} element={<Shop />} />
            ))}
            {shopSlugs.filter((s) => s !== 'shop2' && s !== 'shop3' && s !== 'shop4').map((slug) => (
              <Route key={`${slug}-checkout`} path={`/${slug}/checkout`} element={<Shop />} />
            ))}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
