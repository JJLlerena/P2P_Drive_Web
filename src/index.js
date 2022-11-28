import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
<<<<<<< HEAD
import LaunchPage from './Components/Launchpage';
import Upload from './Components/Dummyup';
=======
import Home from './Components/Home';
import Upload from './Components/Info';
>>>>>>> 107d09a11a3d4f5354e99b20d3dbad6b6b0d893b
import About from './Components/About';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
<<<<<<< HEAD
          <Route index element={<LaunchPage />} />
          <Route path="Dummyup" element={<Upload />} />
=======
          <Route index element={<Home />} />
          <Route path="upload" element={<Upload />} />
>>>>>>> 107d09a11a3d4f5354e99b20d3dbad6b6b0d893b
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="Dashboards" element={<Dashboard />} />
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

