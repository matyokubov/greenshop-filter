import { Box, Product } from "./style";
import { ContextAPI } from "../../context";
import { useContext } from "react";
import { filterByStatus } from "../../filter"

const Products = () => {
    const { status, category } = useContext(ContextAPI)
    const filtered = filterByStatus(category)[status]
    console.log(status, category);
    console.log(filtered);
    return (
        <Box>
            {
                filtered.length !== 0 ? filtered?.map((product, i) => (
                    <Product key={i}>
                        <div className="img">
                            <img src={product.img} alt={product.name}/>
                        </div>
                        <div className="self">
                            <span>{product.name}</span>
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