import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Info from './Components/Info';
import About from './Components/About';
import Register from './Components/Register';
import Login from './Components/Login';
import UI from './Components/UI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="info" element={<Info />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="user" element={<UI />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


function NoPage() {
  return(
    <div>
      <h2>404 Page not found</h2>
    </div>
  )
}

