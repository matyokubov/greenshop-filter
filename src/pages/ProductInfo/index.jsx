import { NavLink, useParams } from "react-router-dom";
import { Container, Product, Size, FavouriteIcon } from "./style";
import data from "../../filter/items"
import { useState, useContext } from "react";
import { ContextAPI } from "../../context"

const Info = () => {
    const params = useParams()
    const product = data.filter((item) => item.id === +params.id)[0]
    const { type } = useContext(ContextAPI)
    const [ selectedSize, setSelectedSize ] = useState('s')
    const [ count, setCount ] = useState(1)
    const onSizeSelect = ({target}) => {
        setSelectedSize(target.id)
    }
    const buy = () => {
        let request = {
            productId: params.id,
            size: selectedSize,
            count
        }
        console.log("send", request)
        alert(request)
    }
    return (
        <Container>
            <div className="navs">
                <NavLink to={`/${type.category}/${type.status}`} className={"nav"}>Home/</NavLink>Shop
            </div>
            <Product>
                <div className="img">
                    <img src={product.img} alt="product"/>
                </div>
                <div className="info">
                    <h1>{product.name}</h1>
                    <h2>${product.saleprice}</h2>
                    <hr />
                    <div>
                        <h5>Short description</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio illum sit laboriosam quos. Minima suscipit tempore animi voluptas? Quia cumque sequi adipisci consectetur totam quis dolorum perspiciatis numquam, modi eaque.
                        </p>
                    </div>
                    <div className="sizes">
                        <div className="size">Size:</div>
                        <div>
                            <Size id="s" onClick={onSizeSelect} className={selectedSize}>S</Size>
                            <Size id="m" onClick={onSizeSelect} className={selectedSize}>M</Size>
                            <Size id="l" onClick={onSizeSelect} className={selectedSize}>L</Size>
                            <Size id="xl" onClick={onSizeSelect} className={selectedSize}>XL</Size>
                        </div>
                    </div>
                    <div className="choose">
                        <div className="counter" onClick={() => !count<=0 && setCount(count-1)}>-</div>
                        <div className="count">{count}</div>
                        <div className="counter" onClick={() => setCount(count+1)}>+</div>
                        <button onClick={buy}>BUY NOW</button>
                        <button>ADD TO CARD</button>
                        <button id="favourite"><FavouriteIcon/></button>
                    </div>
                </div>
            </Product>
        </Container>
    )
}

export default Info;