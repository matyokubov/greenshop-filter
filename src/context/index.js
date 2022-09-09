import { createContext } from "react"
import { useState } from "react"

export const ContextAPI = createContext()
export const Context = ({children}) => {
    const [category, setCategory] = useState("plants")
    const [status, setStatus] = useState("all")
    const [priceRange, setPriceRange] = useState({min: 0, max: 999})
    return (
        <ContextAPI.Provider value={{category, setCategory, status, setStatus, priceRange, setPriceRange}}>
            {children}
        </ContextAPI.Provider>
    )
}