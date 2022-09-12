import Filter from "../../component/Filter"
import Products from "../../component/Products"
import Sidebar from "../../component/Sidebar"

const App = () => {
    return (
        <div className="main">
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