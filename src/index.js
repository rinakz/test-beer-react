import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar/>
    <Routes>
        <Route path='/' element={<Page />}/>
        <Route path='/card/:id' element={<Card />}/>
    </Routes>
    </Provider>
  </BrowserRouter> 
);

