import { Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/ProductInfo"
import Root from "./pages/Shop"
import { useLocation, useNavigate } from "react-router-dom"
import { ContextAPI } from "./context"
import { useContext, useEffect } from "react"
import "./index.css"

const App = () => {
    const currentLocation = useLocation()
    const { type, setType } = useContext(ContextAPI)
    const navigate = useNavigate()
    useEffect(()=>{
        currentLocation.pathname === "/" && navigate("/plants/all/")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(()=>{
        currentLocation.pathname.split("/").length === 3 && setType(
            {
                category: currentLocation.pathname.split("/")[1],
                status: currentLocation.pathname.split("/")[2]
            }
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentLocation])
    return (
        <div>
            <Routes>
                <Route path={`/${type.category}/${type.status}/view/:id`} element={<ProductInfo/>}/>
                <Route path={`/${type.category}/${type.status}`} element={<Root/>}/>
            </Routes>
        </div>
    )
}

export default App;