import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormControl, FormLabel, Input, Button, VStack, } from "@chakra-ui/react";
import { useState } from "react";
import { ProductFormData } from "../../model/data/ProductFormData";
export const AddSingleProductForm = (props) => {
    const [formData, setFormData] = useState({ ...ProductFormData });
    const { handleAddProductSubmit } = props;
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleFileChange = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setFormData({ ...formData, image: file });
    };
    return (_jsx("form", { onSubmit: () => handleAddProductSubmit(formData), encType: "multipart/form-data", children: _jsxs(VStack, { spacing: 4, children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Brand" }), _jsx(Input, { type: "text", name: "brand", value: formData.brand, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Model" }), _jsx(Input, { type: "text", name: "model", value: formData.model, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Description" }), _jsx(Input, { type: "text", name: "description", value: formData.description, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Category" }), _jsx(Input, { type: "text", name: "category", value: formData.category, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "UPC" }), _jsx(Input, { type: "text", name: "upc", value: formData.upc, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Price" }), _jsx(Input, { type: "number", name: "price", value: formData.price, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Quantity" }), _jsx(Input, { type: "number", name: "quantity", value: formData.quantity, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Image" }), _jsx(Input, { type: "file", name: "image", accept: ".jpg, .png", onChange: handleFileChange })] }), _jsx(Button, { type: "submit", children: "Save Product" })] }) }));
};
