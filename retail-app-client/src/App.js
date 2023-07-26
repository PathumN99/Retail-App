import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/modules/HomePage";
import Shoes from "./components/modules/Shoes";
import Navbar from "./components/ui-components/Navbar";
import AppCSS from "./style/App.module.css";
import LoginPage from "./components/modules/LoginPage";
import SignPage from "./components/modules/SignPage";
import AboutPage from "./components/modules/About";

function App() {
  return (
    <div className={AppCSS.pardiv}>
      <Navbar />
      <div className={AppCSS.bgdiv}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/shoes' element={<Shoes />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/signup' element={<SignPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
