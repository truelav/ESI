import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
export const FormControlInput = (props) => {
    const dispatch = useDispatch();
    const { type, label, title, value } = props;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (_jsxs(FormControl, { children: [_jsx(FormLabel, { children: label }), _jsx(Input, { type: type, name: title, value: value, onChange: () => console.log(value) })] }));
};
