import { useContext } from "react";
import { ContextAPI } from "../../context";
import MultiRangeSlider from "../multiRangeSlider/MultiRangeSlider";
import { Container, Filter, FilterBtn, Range } from "./style";

const PriceRange = () => {
    const { setPriceRange } = useContext(ContextAPI)
    let currentRange = {min: 0, max: 1000}
    const setRange = () => {
        console.log(currentRange);
        setPriceRange(currentRange)
    }
    return (
        <Container>
            <h2>Price Range</h2>
            <Filter>
                <Range>
                    <MultiRangeSlider
                        min={0}
                        max={1000}
                        onChange={({ min, max }) => {currentRange = {min, max}}}
                    />
                </Range>
                <FilterBtn onClick={setRange}>Filter</FilterBtn>
            </Filter>
        </Container>
    )
}

export default PriceRange;