import { ChangeEvent, memo, useEffect, useState } from "react";
import { Button, Container, Box, VStack, FormControl, FormLabel, Input, Image } from "@chakra-ui/react";
import { Product } from "../../../entities/Product/model/types/product";

import fallback_image from "/fallback_image.jpeg";

export interface EditProductFormProps {
    product: Product;
    // handleOnUpdateForm: () => void;
    // handleOnSubmitForm: () => void
}

export const DashProductDetails = memo(( props : EditProductFormProps) => {
    const { product } = props
    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        description: "",
        subcategory: "",
        price: "",
        quantity: 0,
        images: "",
        upc: "",
    });

    useEffect(() => {
        console.log(product)
        setFormData({...product})
        // if(formData.price === undefined){
        //     formData.price = "$0"
        // }
        // console.log(product)
    }, [product])
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setFormData({ ...formData, images: file });
    };


    const handleSubmit = async () => {

    }


    return (
        <>
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
                                    value={formData.subcategory}
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
                                    type="string"
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

                            <Image 
                                    src={formData.images} 
                                    alt={formData.description}                                     
                                    fallbackSrc={fallback_image}
                                    boxSize="100px"
                                    objectFit="contain"
                            />

                            <Button type="submit" colorScheme='blue'>Save Product</Button>
                        </VStack>
                    </form>
                </Box>
            </Container>
        </>
    );
});
