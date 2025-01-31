import { Filter } from "./Filter";

export function Header({changeFilters}) {
    return(
        <header>
            <h1>My React Shop</h1>
            <Filter onChange={changeFilters}/>
        </header>
    )
}