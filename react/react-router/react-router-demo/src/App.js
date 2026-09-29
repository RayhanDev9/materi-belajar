import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import NotFound from './components/NotFound';
import './App.css';
import OrderSummary from './components/OrderSummary';
import Product from './components/Product';
import FeaturedProducts from './components/FeaturedProducts';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import Admin from './components/Admin';
import Profile from './components/Profile';

import AuthProvaider from './components/Auth';
import Login from './components/Login';
import RequiredAuth from './components/RequiredAuth';
const LazyAbout = React.lazy(() => import('./components/About'))



function App() {
  return (
    <AuthProvaider>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<React.Suspense fallback="Loading..."><LazyAbout /></React.Suspense>} />
            <Route path='/order-summary' element={<OrderSummary />} />
            <Route path='/products' element={<Product />} >

              <Route index element={<FeaturedProducts />} />
              <Route path='featured' element={<FeaturedProducts />} />
              <Route path='new' element={<NewProduct />} />
            </Route>
            <Route path='/users' element={<Users />}>
              <Route path=':userId' element={<UserDetail />} />
              <Route path='admin' element={<Admin />} /></Route>
            <Route path='/profile' element={<RequiredAuth><Profile /></RequiredAuth>} />
            <Route path='/login' element={<Login />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>
      </div>
    </AuthProvaider>
  );
}

export default App;
