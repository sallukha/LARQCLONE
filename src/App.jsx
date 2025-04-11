import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './componenets/NavBar';
import Footer from './componenets/Footer';

 
const Home = lazy(() => import('./pages/Home'));
const ShopAll = lazy(() => import('./pages/ShopAll'));
const Pitchers = lazy(() => import('./pages/Pitchers'));
const Bottles = lazy(() => import('./pages/Bottles'));
const LogIn = lazy(() => import('./pages/LogIn'));
const Register = lazy(() => import('./pages/Register'));
const Technology = lazy(() => import('./pages/Technology'));
const WaterQuality = lazy(() => import('./pages/WaterQuality'));
const ShowProduct = lazy(() => import('./componenets/ShowProduct'));

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />

      
      <Suspense fallback={<div className="text-center my-10 text-xl">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopall" element={<ShopAll />} />
          <Route path="/pitchers" element={<Pitchers />} />
          <Route path="/bottles" element={<Bottles />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/water" element={<WaterQuality />} />
          <Route path="/products/:id" element={<ShowProduct />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
