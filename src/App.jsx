import { useState } from "react"
import { Porduct } from "./components/Product"
import {products as initialProducts} from "./mocks/products.json"
import { Header } from "./components/Header";

function App() {
  const [products] = useState(initialProducts);
  const [filter, setFilter] = useState({
    category: 'all',
    price: 0
  })

  //FILTRAR PRODUCTOS
  const filterProducts = (products) =>{
    return products.filter(product => {
      return product.price >= filter.price && 
      (filter.category == 'all' || product.category == filter.category)
    })
  }

  const prodcutsFilter = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilter}/>
      <Porduct products={prodcutsFilter}/>
    </>
  )
}

export default App
