import { Box, Product } from "./style";
import { ContextAPI } from "../../context";
import { useContext } from "react";
import { filterByStatus, filterByPriceRange } from "../../filter"
import { useNavigate } from "react-router-dom";

const Products = () => {
    const { type, priceRange } = useContext(ContextAPI)
    const navigate = useNavigate()
    const filtered = filterByPriceRange(filterByStatus(type.category)[type.status], priceRange)
    return (
        <Box>
            {
                filtered.length !== 0 ? filtered?.map((product, i) => (
                    <Product key={i}>
                        <div className="img" onClick={() => navigate(`/${type.category}/${type.status}/view/${product.id}`)}>
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <div className="self">
                            <span onClick={() => navigate(`/${type.category}/${type.status}/view/${product.id}`)} className="ptitle">{product.name}</span>
                            <span className="price">${product.saleprice}</span>
                        </div>
                    </Product>
                )) : (
                    <div>
                        Products not found
                    </div>
                )
            }
        </Box>
    )
}

export default Products;