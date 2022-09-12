import { Box, StatusList } from "./style";
import statusList from "../../filter/filter"
import { useContext } from "react";
import { ContextAPI } from "../../context";
import { NavLink } from "react-router-dom";

const Categories = () => {
    const { type, setType } = useContext(ContextAPI)
    return (
        <Box>
            <StatusList>
                {
                    statusList?.map((status, i) => (
                        <span key={i} onClick={() => setType({...type, status: status.statusName})}>
                            <NavLink to={`/${type.category}/${status.statusName}`}>{status.title}</NavLink>
                        </span>
                    ))
                }
            </StatusList>
            <div>
                <label htmlFor="sort">Short by: </label>
                <select name="sort" id="sort">
                    <option value="default">Default sorting</option>
                </select>
            </div>
        </Box>
    )
}

export default Categories;