import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import * as Yup from "yup";
import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Button, VStack, Container, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAddSingleProductMutation } from "../../../app/api/apiSlice";
import { FormResult } from "../FormResult/FormResult";
const ProductForm = () => {
    const [addSingleProduct, { isLoading, error, isSuccess }] = useAddSingleProductMutation();
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
        image: null,
        upc: "",
    });
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
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append("brand", formData.brand);
        formDataToSend.append("model", formData.model);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("upc", formData.upc);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("quantity", formData.quantity);
        if (formData.image) {
            formDataToSend.append("image", formData.image);
        }
        try {
            const result = await addSingleProduct(formDataToSend);
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    };
    if (isSuccess) {
        return (_jsx(FormResult, { headlineText: `Product Saved ${formData.model} Succress`, bodyText: formData.description, children: _jsx(Link, { to: `/products`, children: _jsx(Button, { children: "Check Added Product" }) }) }));
    }
    if (error) {
        return _jsxs("div", { children: ["...Error Adding Product: ", JSON.stringify(error)] });
    }
    if (isLoading) {
        return _jsx("div", { children: "...Is Loading" });
    }
    return (_jsx(Container, { maxW: "lg", py: { base: "12", md: "24" }, px: { base: "0", sm: "8" }, children: _jsx(Box, { p: 4, children: _jsx("form", { onSubmit: handleSubmit, encType: "multipart/form-data", children: _jsxs(VStack, { spacing: 4, children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Brand" }), _jsx(Input, { type: "text", name: "brand", value: formData.brand, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Model" }), _jsx(Input, { type: "text", name: "model", value: formData.model, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Description" }), _jsx(Input, { type: "text", name: "description", value: formData.description, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Category" }), _jsx(Input, { type: "text", name: "category", value: formData.category, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "UPC" }), _jsx(Input, { type: "text", name: "upc", value: formData.upc, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Price" }), _jsx(Input, { type: "number", name: "price", value: formData.price, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Quantity" }), _jsx(Input, { type: "number", name: "quantity", value: formData.quantity, onChange: handleChange })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Image" }), _jsx(Input, { type: "file", name: "image", accept: ".jpg, .png", onChange: handleFileChange })] }), _jsx(Button, { type: "submit", colorScheme: 'blue', children: "Save Product" })] }) }) }) }));
};
export default ProductForm;
