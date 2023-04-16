import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePages from './pages/pages';
import Site from './pages/site';
import Accessibility from './pages/Accessibility';
import { BrowserRouter , Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePages/>} />
      <Route path='/1' element={<Site/>} />
      <Route path='/2' element={<Accessibility/>} />

      </Routes>
      
     </BrowserRouter>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
