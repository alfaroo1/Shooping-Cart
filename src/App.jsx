import { useState } from "react"
import { Porduct } from "./components/Product"
import {products as initialProducts} from "./mocks/products.json"
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { useFilter } from "./hooks/useFilter.js";
import Cart from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";



function App() {
  const [products] = useState(initialProducts);
  const {filterProducts} = useFilter();
  const prodcutsFilter = filterProducts(products);

  return (
    <>
    <CartProvider>
      <Header/>
      <Cart/>
      <Porduct products={prodcutsFilter}/>
      <Footer/>
    </CartProvider>
    </>
  )
}

export default App
