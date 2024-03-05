import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControlItem } from "../FormControlItem/FormControlItem";
export const EditProductPrice = (props) => {
    const { productInfo, handleChange } = props;
    const { price, quantity } = productInfo;
    return (_jsxs(_Fragment, { children: [_jsx(FormControlItem, { type: "text", title: "price", label: "price", value: price, handleChange: handleChange }), _jsx(FormControlItem, { type: "text", title: "quantity", label: "quantity", value: quantity, handleChange: handleChange })] }));
};
