import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import LaunchPage from './Components/Launchpage';
import Upload from './Components/Dummyup';
import About from './Components/About';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Home from './Dashboard/Home';
import Files from './Dashboard/Files';
import Explore from './Dashboard/Explore';
import Settings from './Dashboard/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LaunchPage />} />
          <Route path="Dummyup" element={<Upload />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} >
              <Route index element={<Home />} />
              <Route path="Home" element={<Home />} />
              <Route path="files" element={<Files />} />
              <Route path="explore" element={<Explore />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<NoPage />} />
          </Route>
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

