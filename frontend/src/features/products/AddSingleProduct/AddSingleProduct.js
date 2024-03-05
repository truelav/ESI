import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import * as Yup from "yup";
import { Container, Box } from "@chakra-ui/react";
import { useAddSingleProductMutation } from "../../../app/api/apiSlice";
import { AddSingleProductForm } from "./ui/AddSingleProductForm/AddSingleProductForm";
const AddSingleProduct = () => {
    const [addSingleProduct, { isLoading, error, isSuccess }] = useAddSingleProductMutation();
    const handleAddProductSubmit = async (e, formData) => {
        e.preventDefault();
        try {
            const result = await addSingleProduct({ ...formData });
            console.log(result);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    };
    if (isSuccess) {
        return _jsx("div", { children: "Product Saved Success" });
    }
    if (error) {
        return _jsx("div", { children: "...Error Adding Product" });
    }
    if (isLoading) {
        return _jsx("div", { children: "...Is Loading" });
    }
    return (_jsxs(Container, { maxW: "lg", py: { base: "12", md: "24" }, px: { base: "0", sm: "8" }, children: [_jsx(AddSingleProductForm, { handleAddProductSubmit: handleAddProductSubmit }), _jsx(Box, { p: 4 })] }));
};
export default AddSingleProduct;
