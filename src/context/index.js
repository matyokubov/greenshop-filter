import { createContext } from "react"
import { useState } from "react"

export const ContextAPI = createContext()
export const Context = ({children}) => {
    const [category, setCategory] = useState("plants")
    const [status, setStatus] = useState("all")
    return (
        <ContextAPI.Provider value={{category, setCategory, status, setStatus}}>
            {children}
        </ContextAPI.Provider>
    )
}