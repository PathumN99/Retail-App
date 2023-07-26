import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/modules/HomePage";
import Shoes from "./components/modules/Shoes";
import Navbar from "./components/ui-components/Navbar";
import AppCSS from "./style/App.module.css";

function App() {
  return (
    <div className={AppCSS.pardiv}>
      <Navbar />
      <div className={AppCSS.bgdiv}>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/shoes' element={<Shoes />}></Route>
          {/* <Route path='/forecasting' element={<Forecasting />}></Route>
        <Route path='/inflation' element={<InflationData />}></Route>
        <Route path='/add-analysis' element={<Analaysis />}></Route>
        <Route path='/view-analysis' element={<Dataview />}></Route>
        <Route path='/about' element={<About />}></Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
