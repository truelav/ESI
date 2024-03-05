import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
export const FormControlFeature = (props) => {
    const { feature, handleEditFeature, handleDeleteFeature } = props;
    const [updatedFeature, setUpdatedFeature] = useState(feature);
    const hasChanged = updatedFeature !== feature;
    const handleChange = (e) => {
        const { value } = e.target;
        setUpdatedFeature(value);
    };
    return (_jsx(FormControl, { children: _jsxs(Flex, { children: [_jsx(Input, { type: "text", value: updatedFeature, onChange: handleChange }), _jsx(Button, { color: "red", onClick: () => handleDeleteFeature(feature), children: "Delete" }), hasChanged && (_jsxs(Box, { children: [_jsx(Button, { color: "green", onClick: () => handleEditFeature(feature, updatedFeature), children: "X" }), _jsx(Button, { color: "red", onClick: () => handleEditFeature(feature, updatedFeature), children: "Y" })] }))] }) }));
};
