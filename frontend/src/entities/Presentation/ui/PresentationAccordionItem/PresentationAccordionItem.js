import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Checkbox, } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductItem } from "../../../../shared/ui/Product/ProductItem/ProductItem";
import { addSelectedProductCategory, removeSelectedProductCategory } from "../../../Product/model/slice/productSlice";
// interface PresentationAccordionItemProps {
//     brandGroup: 
// }
const PresentationAccordionItem = ({ category }) => {
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);
    const brandIds = category.products.map((product) => product._id);
    const toggleProductCategory = () => {
        if (isSelected) {
            dispatch(removeSelectedProductCategory(brandIds));
            setIsSelected(false);
        }
        else {
            dispatch(addSelectedProductCategory(brandIds));
            setIsSelected(true);
        }
    };
    return (_jsxs(AccordionItem, { children: [_jsx("h2", { children: _jsxs(AccordionButton, { children: [_jsx(Checkbox, { onChange: () => toggleProductCategory(), children: category.category }), _jsx(AccordionIcon, {}), category.products.length, " - items available"] }) }), _jsx(AccordionPanel, { pb: 4, children: category.products.map((product) => (_jsx(ProductItem, { product: product }, product._id))) })] }));
};
export default PresentationAccordionItem;
