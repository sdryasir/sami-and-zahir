import './App.css';
import Header from './header'
import Home from './pages/home'
import Footer from './footer'
import { useState } from 'react'
import { products } from './db/data';
function App() {
  const [product, setProduct] = useState({
    pname: 'Pen',
    pprice: 25,
    pqty: 5
  })

  return (
    <>
      {/* <Header />
      <Home />
      <Footer /> */}
      <p>Product Name: {product.pname}</p>
      <p>Product Price: {product.pprice}</p>
      <p>Product Quantity: {product.pqty}</p>
      <button onClick={() => setProduct(product.pprice + 1)}>+</button>
      <button onClick={() => setProduct(product.pprice - 1)}>-</button>

    </>
  );
}

export default App;
