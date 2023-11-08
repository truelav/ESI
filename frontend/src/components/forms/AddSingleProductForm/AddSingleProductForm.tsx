import { useState, ChangeEvent, FormEvent } from "react";
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Container
} from "@chakra-ui/react";
import { useAddSingleProductMutation } from "../../../app/api/apiSlice";

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

const ProductForm= () => {
    const [addSingleProduct, { isLoading, error, isSuccess }] = useAddSingleProductMutation();
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        description: "",
        category: "",
        price: "",
        quantity: "",
        image: null,
        upc: ""
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

    // const [formInputs, setFormInputs] = useState([
    //     {
    //         label: "brand", 
    //         type: "text",
    //         name: "brand",
    //         formData: formData.brand, 
    //         handleAction: handleChange, 
    //     },
    //     {
    //         label: "model", 
    //         type: "text",
    //         name: "model",
    //         formData: formData.model, 
    //         handleAction: handleChange, 
    //     },
    //     {
    //         label: "description", 
    //         type: "text",
    //         name: "description",
    //         formData: formData.description, 
    //         handleAction: handleChange, 
    //     },
    //     {
    //         label: "price", 
    //         type: "number",
    //         name: "price",
    //         formData: formData.price, 
    //         handleAction: handleChange, 
    //     },
    //     {
    //         label: "quantity", 
    //         type: "number",
    //         name: "quantity",
    //         formData: formData.quantity, 
    //         handleAction: handleChange, 
    //     },
    //     {
    //         label: "upc", 
    //         type: "string",
    //         name: "upc",
    //         formData: formData.upc, 
    //         handleAction: handleChange, 
    //     },
    //     {
    //         label: "image", 
    //         type: "file",
    //         name: "image",
    //         formData: formData.image, 
    //         handleAction: handleFileChange, 
    //     },

    // ])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("brand", formData.brand);
        formDataToSend.append("model", formData.model);
        formDataToSend.append("price", formData.price);
        formDataToSend.append("quantity", formData.quantity);
        if(formData.image){
            formDataToSend.append("image", formData.image);
        }

        try {
            const result = await addSingleProduct(formDataToSend);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    };


    if(isSuccess){
        return (
            <div>Product Saved Success</div>
        )
    }

    if(error){
        return (
            <div>...Error Adding Product</div>
        )
    }

    if(isLoading){
        return (
            <div>...Is Loading</div>
        )
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
        </Container>    
    )
};

export default ProductForm;
