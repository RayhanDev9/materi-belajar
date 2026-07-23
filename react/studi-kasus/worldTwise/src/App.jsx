import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useContext, useEffect, useState } from "react";

import CityList from "./componensts/CityList";
import City from "./componensts/City";
import Form from "./componensts/Form";
import CountryList from "./componensts/CountryList";
import SpinnerFullPage from "./componensts/SpinnerFullPage";

import { CitiesProvaider } from "./contexts/CitiesContext";
import { AuthProvaider } from "./contexts/FakeAuthContext";

// import Homepage from "./pages/Homepage"; // Pastikan komponen ini sudah di-import
// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import PageNotFound from "./pages/PageNotFound";
// import AppLayout from "./pages/AppLayout";
// import Login from "./pages/Login";
// import ProtectedRoute from "./pages/ProtectedRoute";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const Login = lazy(() => import("./pages/Login"));
const ProtectedRoute = lazy(() => import("./pages/ProtectedRoute"));

const BASE_URL = "http://localhost:8000";
function App() {
  return (
    <AuthProvaider>
      <CitiesProvaider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              {/* Tambahkan rute untuk path "/" (Halaman Beranda) */}
              <Route path="/" element={<Homepage />} />

              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvaider>
    </AuthProvaider>
  );
}

export default App;
// dist/index.html                   0.50 kB │ gzip:   0.32 kB
// dist/assets/logo-CRBkOzM_.png    50.69 kB
// dist/assets/index-BHveOZEZ.css   31.12 kB │ gzip:   5.06 kB
// dist/assets/index-5GPZnUal.js   577.29 kB │ gzip: 169.26 kB
