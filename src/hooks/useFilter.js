import { FiltersContetx } from "../context/filter";
import { useContext } from "react"
export function useFilter (){
  
  const {filter,setFilter} = useContext(FiltersContetx)

  //FILTRAR PRODUCTOS
  const filterProducts = (products) =>{
    return products.filter(product => {
      return product.price >= filter.price && 
      (filter.category == 'all' || product.category == filter.category)
    })
  }

  return {filter,filterProducts, setFilter}
}