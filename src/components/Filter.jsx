import { useState, useId } from "react"
import "./Filter.css"
export function Filter({onChange}) {
    const [rangPrice, setRangPrice] = useState(0);
    const priceFilterId = useId();
    const categoryFilterId = useId();

    const handelPirce = (event) =>{
        setRangPrice(event.target.value)
        onChange(newState => ({
            ...newState,
            price: event.target.value
        }))
    }

    const handelCategory = (event) =>{
        onChange(newState => ({
            ...newState,
            category: event.target.value
        }))
    }
    return(
        <section className="filters">
            <div>
                <label htmlFor={priceFilterId}>Precio minimo</label>
                <input type="range" id={priceFilterId} onChange={handelPirce} min='0' max='1000'/>
                <span>{rangPrice}€</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                <select name="" id={categoryFilterId} onChange={handelCategory}>
                    <option value="all">Todo</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smarthphone">Moviles</option>
                </select>
            </div>
        </section>
    )
}