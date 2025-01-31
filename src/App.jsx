import { useState } from "react"
import { Porduct } from "./components/Product"
import {products as initialProducts} from "./mocks/products.json"
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { useFilter } from "./hooks/useFilter.js";
import Cart from "./components/Cart.jsx";



function App() {
  const [products] = useState(initialProducts);
  const {filterProducts} = useFilter();
  const prodcutsFilter = filterProducts(products);

  return (
    <>
      <Header/>
      <Cart/>
      <Porduct products={prodcutsFilter}/>
      <Footer/>
    </>
  )
}

export default App
