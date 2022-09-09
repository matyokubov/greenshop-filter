import Categories from "../Categories";
import PriceRange from "../PriceRange";
import { Container } from "./style";

const Sidebar = () => {
    return (
        <Container>
            <Categories/>
            <PriceRange/>
        </Container>
    )
}

export default Sidebar;