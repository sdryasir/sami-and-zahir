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

  const handleIncrement = () => {
    setProduct({ ...product, pprice: product.pprice + 1 })
  }
  const handleDecrement = () => {
    setProduct({ ...product, pprice: product.pprice - 1 })
  }

  return (
    <>
      {/* <Header />
      <Home />
      <Footer /> */}
      <p>Product Name: {product.pname}</p>
      <p>Product Price: {product.pprice}</p>
      <p>Product Quantity: {product.pqty}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

    </>
  );
}

export default App;
