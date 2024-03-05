import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import { Button, GridItem, Text } from "@chakra-ui/react";
import { setSort } from "../../../../features/products/SortProducts/model/slice/sortSlice";
export const ProductSortItem = (props) => {
    const dispatch = useDispatch();
    const { sortItem, selectedSort } = props;
    const isSelected = selectedSort.name == sortItem;
    const handleSelectSort = () => {
        dispatch(setSort(sortItem));
    };
    let icon = _jsx(_Fragment, {});
    if (isSelected && selectedSort.ascending) {
        icon = _jsx(GoArrowUp, {});
    }
    else {
        icon = _jsx(GoArrowDown, {});
    }
    return (_jsx(GridItem, { colSpan: 2, children: _jsxs(Button, { px: 8, isActive: isSelected, color: isSelected ? "blue" : "gray", onClick: handleSelectSort, children: [_jsx(Text, { fontSize: 18, textTransform: "capitalize", children: sortItem }), icon] }) }));
};
