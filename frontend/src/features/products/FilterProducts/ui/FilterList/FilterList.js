import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import FilterItem from "../FilterItem/FilterItem";
const FilterList = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const filterList = useSelector((state) => state.filter.filters);
    return (_jsx(_Fragment, { children: filterList.map((filterItem) => (_jsx(FilterItem, { filterItem: filterItem }, filterItem.name))) }));
};
export default FilterList;
