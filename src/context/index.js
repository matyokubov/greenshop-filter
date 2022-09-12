import { createContext } from "react"
import { useState } from "react"

export const ContextAPI = createContext()
export const Context = ({children}) => {
    const [type, setType] = useState({category: "plants", status: "all"})
    const [priceRange, setPriceRange] = useState({min: 0, max: 999})
    return (
        <ContextAPI.Provider value={{type, setType, priceRange, setPriceRange}}>
            {children}
        </ContextAPI.Provider>
    )
}