import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Input, FormControl, FormLabel, } from "@chakra-ui/react";
function ChakraInput(props) {
    const { label, formData, handleAction, type, name } = props;
    return (_jsxs(FormControl, { children: [_jsx(FormLabel, { children: label }), _jsx(Input, { type: type, name: name, value: formData.brand, onChange: handleAction })] }));
}
export default ChakraInput;
