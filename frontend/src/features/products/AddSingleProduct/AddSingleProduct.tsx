// import * as Yup from "yup";
import { Container, Box } from "@chakra-ui/react";
import { FormEvent } from "react";
import { useAddSingleProductMutation } from "../../../app/api/apiSlice";
import { AddSingleProductForm } from "./ui/AddSingleProductForm/AddSingleProductForm";
import { ProductFormDataProps } from "./model/types/ProductFormDataProps";

const AddSingleProduct = () => {
    const [addSingleProduct, { isLoading, error, isSuccess }] =
        useAddSingleProductMutation();

    const handleAddProductSubmit = async (
        e: FormEvent,
        formData: ProductFormDataProps
    ) => {
        e.preventDefault();
        try {
            const result = await addSingleProduct({ ...formData });
            console.log(result);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    if (isSuccess) {
        return <div>Product Saved Success</div>;
    }

    if (error) {
        return <div>...Error Adding Product</div>;
    }

    if (isLoading) {
        return <div>...Is Loading</div>;
    }

    return (
        <Container
            maxW="lg"
            py={{ base: "12", md: "24" }}
            px={{ base: "0", sm: "8" }}
        >
            <AddSingleProductForm
                handleAddProductSubmit={handleAddProductSubmit}
            />
            <Box p={4}></Box>
        </Container>
    );
};

export default AddSingleProduct;
