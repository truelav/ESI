import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";
export const SelectForm = (props) => {
    const { placeholder, options, fieldName } = props;
    return (_jsx(_Fragment, { children: _jsxs(FormControl, { name: fieldName || "", children: [_jsx(FormLabel, { children: placeholder }), _jsx(Select, { placeholder: placeholder, children: options?.map((optionVal) => (_jsx("option", { value: optionVal, children: optionVal }, optionVal))) })] }) }));
};
