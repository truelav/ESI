// import * as Yup from "yup";

import { useState, ChangeEvent, FormEvent } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Container,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAddSingleProductMutation } from "../../../app/api/apiSlice";
import { FormResult } from "../FormResult/FormResult";

export interface FormDataProps {
    brand: string;
    model: string;
    description: string;
    category: string;
    price: string;
    quantity: string;
    image: File | null;
    upc: string;
}

const ProductForm = () => {
    const [addSingleProduct, { isLoading, error, isSuccess }] =
        useAddSingleProductMutation();
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = async (e: FormEvent) => {
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
        } catch (error) {
            console.log(error);
        }
    };

    if (isSuccess) {
        return (
            <FormResult
                headlineText={`Product Saved ${formData.model} Succress`}
                bodyText={formData.description}
            >
                <Link to={`/products`}>
                    <Button>Check Added Product</Button>
                </Link>
            </FormResult>
        );
    }

    if (error) {
        return <div>...Error Adding Product: {JSON.stringify(error)}</div>;
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
            <Box p={4}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <VStack spacing={4}>
                        <FormControl>
                            <FormLabel>Brand</FormLabel>
                            <Input
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Model</FormLabel>
                            <Input
                                type="text"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Input
                                type="text"
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>UPC</FormLabel>
                            <Input
                                type="text"
                                name="upc"
                                value={formData.upc}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Price</FormLabel>
                            <Input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Quantity</FormLabel>
                            <Input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Image</FormLabel>
                            <Input
                                type="file"
                                name="image"
                                accept=".jpg, .png"
                                onChange={handleFileChange}
                            />
                        </FormControl>

                        <Button type="submit" colorScheme='blue'>Save Product</Button>
                    </VStack>
                </form>
            </Box>
        </Container>
    );
};

export default ProductForm;
