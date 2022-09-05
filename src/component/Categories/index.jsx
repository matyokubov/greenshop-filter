import { Box } from "./style";
import categoryList from "../../filter/category"
import { separate } from "../../filter"
import items from "../../filter/items"
import { ContextAPI } from "../../context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

const Categories = () => {
    const { status, setCategory } = useContext(ContextAPI)
    return (
        <Box>
            <h2>Categories</h2>
            <ul>
                {
                    categoryList?.map((category, i) => (
                        <li key={i} onClick={() => setCategory(category.categoryName)}>
                            <NavLink activeClassName="activeCategoryItem" to={`/${category.categoryName}/${status}`}>
                                <span>{category.title}</span>
                                <span>
                                    ({separate(categoryList, items, "category", "categoryName")[category.categoryName].length})
                                </span>
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </Box>
    )
}

export default Categories;