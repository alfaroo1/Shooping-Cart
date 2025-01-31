import { useId } from "react"
import "./Filter.css"
import { useFilter } from "../hooks/useFilter.js";
export function Filter() {
    const {filter,setFilter} = useFilter();
    const priceFilterId = useId();
    const categoryFilterId = useId();

    const handelPirce = (event) =>{
        setFilter(newState => ({
            ...newState,
            price: event.target.value
        }))
    }

    const handelCategory = (event) =>{
        setFilter(newState => ({
            ...newState,
            category: event.target.value
        }))
    }
    return(
        <section className="filters">
            <div>
                <label htmlFor={priceFilterId}>Precio minimo</label>
                <input type="range" id={priceFilterId} onChange={handelPirce} min='0' max='1000' value={filter.price}/>
                <span>{filter.price}€</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select name="" id={categoryFilterId} onChange={handelCategory}>
                    <option value="all">Todo</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Moviles</option>
                </select>
            </div>
        </section>
    )
}