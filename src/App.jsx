import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AddProduct from './pages/AddProduct';
import ShowProduct from './pages/ShowProduct';
import EditProduct from './pages/EditProduct';
import Protected from "./components/Protected";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route excat path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="books" element={
            <Protected>
              <ShowProduct />
            </Protected> 
          } />
          <Route path="books/add" element={<AddProduct />} />
          <Route path="books/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
