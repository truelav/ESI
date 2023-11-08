// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
import { useState } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useAddSingleProductMutation } from "../../../app/api/apiSlice";

const ProductForm = () => {
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        price: "",
        quantity: "",
        image: null,
    });
    const [addSingleProduct, { isLoading }] = useAddSingleProductMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("brand", formData.brand);
        formDataToSend.append("model", formData.model);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("quantity", formData.quantity);
        formDataToSend.append("image", formData.image);

        try {
            const result = await addSingleProduct(formDataToSend);
            console.log(result);
        } catch (error) {
            console.log(error);
        }

        // Make a request with formDataToSend using fetch or axios
        // Example with fetch:
        // fetch('/api/products', {
        //   method: 'POST',
        //   body: formDataToSend,
        // })
        //   .then(response => response.json())
        //   .then(data => {
        //     console.log('Product saved:', data);
        //     // Do any necessary UI updates after product creation
        //   })
        //   .catch(error => console.error('Error:', error));
    };

    return (
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

                    <Button type="submit">Save Product</Button>
                </VStack>
            </form>
        </Box>
    );
};

export default ProductForm;
