import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex } from "@chakra-ui/react";
import { FormControlItem } from "../FormControlItem/FormControlItem";
export const AddProductFeatures = (props) => {
    const { newFeature, handleAddFeature, handleChange } = props;
    return (_jsxs(Flex, { w: "100%", children: [_jsx(FormControlItem, { type: "text", title: "newFeature", label: "newFeature", value: newFeature, handleChange: handleChange }), _jsx(Button, { onClick: handleAddFeature, mt: 8, ml: 8, children: "Add Feature" })] }));
};
