import './App.css';

import Home from './pages/Home/Home';
import Produto from './pages/Produto/Produto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { ProductContext } from './contexts/productContext';
import Cadastro from './pages/Cadastro/Cadastro';
import ProdutoSobre from './pages/Produtos/ProdutoSobre';

function App() {
  const[products, setProducts] = useState()

  return (
    <>
    <ProductContext.Provider value={{products, setProducts}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtoSobre' element={<ProdutoSobre />} />
          <Route path='/produto/:id/*' element={<Produto />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
      </ProductContext.Provider>
      
    </>
  );
}

export default App;
