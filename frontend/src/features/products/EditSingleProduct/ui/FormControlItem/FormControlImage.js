import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
export const FormControlImage = (props) => {
    const { handleFileChange } = props;
    return (_jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Product Image" }), _jsx(Input, { type: "file", name: "image", accept: ".jpg, .png", onChange: handleFileChange })] }));
};
