import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControlItem } from "../FormControlItem/FormControlItem";
export const EditProductInfo = (props) => {
    const { productInfo, handleChange } = props;
    const { brand, model, description, category, upc } = productInfo;
    // const product = useSelector(state => state.editSingleProduct.formData)
    // const { brand, model, description, category, subcategory, upc, price, quantity } = product
    return (_jsxs(_Fragment, { children: [_jsx(FormControlItem, { type: "text", title: "model", label: "model", value: model, handleChange: handleChange }), _jsx(FormControlItem, { type: "text", title: "brand", label: "brand", value: brand, handleChange: handleChange }), _jsx(FormControlItem, { type: "text", title: "description", label: "description", value: description, handleChange: handleChange }), _jsx(FormControlItem, { type: "text", title: "category", label: "category", value: category, handleChange: handleChange }), _jsx(FormControlItem, { type: "text", title: "upc", label: "upc", value: upc, handleChange: handleChange })] }));
};
