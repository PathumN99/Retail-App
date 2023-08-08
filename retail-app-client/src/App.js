import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/modules/HomePage";
import Shoes from "./components/modules/Shoes";
import Navbar from "./components/ui-components/Navbar";
import AppCSS from "./style/App.module.css";
import LoginPage from "./components/modules/LoginPage";
import SignPage from "./components/modules/SignPage";
import AboutPage from "./components/modules/About";
import ApparelPage from "./components/modules/Apparel";
import AccessoriesPage from "./components/modules/Accessories";
import ProductsPage from "./components/modules/Products";
import ProductShoe from "./components/modules/Products/ProductShoe";
import ProductApparel from "./components/modules/Products/ProductApparel";
import ProductAccessories from "./components/modules/Products/ProductAccessories";

function App() {
  return (
    <div className={AppCSS.pardiv}>
      <Navbar />
      <div className={AppCSS.bgdiv}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/shoes' element={<Shoes />}></Route>
          <Route path='/apparel' element={<ApparelPage />}></Route>
          <Route path='/accessories' element={<AccessoriesPage />}></Route>
          <Route path='/products' element={<ProductsPage />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<SignPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/product-shoe' element={<ProductShoe />}></Route>
          <Route path='/product-apparel' element={<ProductApparel />}></Route>
          <Route path='/product-accessories' element={<ProductAccessories />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
