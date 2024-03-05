import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
export const DashProductDetailsFormItem = (props) => {
    const { handleChange, value, label, type, title } = props;
    return (_jsxs(FormControl, { children: [_jsx(FormLabel, { children: label }), _jsx(Input, { type: type, name: title, value: value, onChange: handleChange })] }));
};
