import React from 'react';
import { Routes , Route } from "react-router-dom";
import Category from "./categories/Category"
import Home from "./home/Home";
import Pickdate from './pickdate/Pickdate';
function App() {
  
  return (

    <Routes>
      <Route path="/" element={<Home  />}></Route>
      <Route path="service/:service_name/:id" element={<Pickdate />}></Route>
      <Route path="categories/:category_name/:cat" element={<Category />}></Route>

    </Routes>

  );
}

export default App;
