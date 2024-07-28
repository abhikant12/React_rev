import './App.css';		
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom'; 
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";


export default function App() {
  return (
    <div>
       <BrowserRouter>

           <Header/>                         

           <div className="App">
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path = "/cart" element = {<Cart/>} />
              </Routes>
            </div>

       </BrowserRouter>
    </div>


  );
}
