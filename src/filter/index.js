import category from "./category";
import filter from "./filter";
import items from "./items";

const separate = (data, items, target, test) => {
    let separated = {};
    data.forEach(dataItem => {
        let separatedItems = items.filter(item => item[target] === dataItem[test])
        separated[dataItem[test]] = separatedItems
    });

    return separated
}

const filterByStatus = (categoryName) => {
    let separatedByCategory = separate(category, items, "category", "categoryName")
    let separatedByStatus;
    try {
        separatedByStatus = separate(filter, separatedByCategory[categoryName], "status", "statusName")
    } finally {
        return separatedByStatus
    }
}

export {separate, filterByStatus};