import { createContext, useState } from "react";

export const FiltersContetx = createContext()

export function FilterProvider ({children}){
    const [filter, setFilter] = useState({
        category: 'all',
        price:0
    })
    return(
        <FiltersContetx.Provider value={{ 
            filter,
            setFilter
        }}
        >
            {children}
        </FiltersContetx.Provider>
    )
}