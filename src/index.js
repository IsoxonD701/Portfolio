import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Single from './Pages/Singlepage/Singe';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
    <Route path='/single/:id' element={<Single/>} />

    <Route path='*' element={<h1>404 || page not found</h1>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


