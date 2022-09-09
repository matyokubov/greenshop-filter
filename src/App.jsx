import Filter from "./component/Filter"
import Products from "./component/Products"
import Sidebar from "./component/Sidebar"
import { useLocation, Route } from "react-router-dom"
import { ContextAPI } from "./context"
import { useContext } from "react"
import "./index.css"
import { Redirect } from "react-router-dom"

const App = () => {
    const currentLocation = useLocation()
    const { setStatus, setCategory } = useContext(ContextAPI)
    return (
        <div className="main">
            <Route path={currentLocation.pathname}>
                {
                    currentLocation.pathname.split("/").length === 3 ? () => {
                        setCategory(currentLocation.pathname.split("/")[1])
                        setStatus(currentLocation.pathname.split("/")[2])
                        return null
                    } : () => <Redirect to={"/plants/all"}/>
                }
            </Route>
            <div className="sidebar">
                <Sidebar/>
            </div>
            <div className="view">
                <Filter/>
                <Products/>
            </div>
        </div>
    )
}

export default App;