import { useState, useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Home';
import Products from './Components/Products';
import Orders from './Components/Orders';
import Header from './Components/Parts/Header';
import Users from './Components/Users';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
          {
            isLogin 
            ? 
            
            <>
              <Route path="/" element={<Products /> } />
              <Route path="/orders" element={<Orders /> }/>
              <Route path="/users" element={<Users /> }/>
            </>
            
            : <Route path="/" element={<Home />} />
          }
           

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
