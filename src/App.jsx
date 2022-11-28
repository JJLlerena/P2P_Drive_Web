import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Launch from './Layouts/Launch';
import Upload from './Components/Upload';
import About from './Components/About';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Layouts/Dashboard';
import Home from './Dashboard/Home';
import Files from './Dashboard/Files';
import Explore from './Dashboard/Explore';
import Settings from './Dashboard/Settings';

export default function App() {
  return(
    <div className='App'>  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Launch />}>
            <Route index element={<Homepage/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/info" element={<Upload />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} >
                <Route index element={<Home />} />
                <Route path=":files" element={<Files />} />
                <Route path=":explore" element={<Explore />} />
                <Route path=":settings" element={<Settings />} />
                <Route path="*" element={<NoPage />} />
            </Route>
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>  
   )
  };


function NoPage() {
return(
<div>
  <h2>404 Page not found</h2>
</div>
)
}