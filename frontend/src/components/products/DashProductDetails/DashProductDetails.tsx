import { ChangeEvent, FormEvent, memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Box, VStack, FormControl, FormLabel, Input, Image } from "@chakra-ui/react";
import { Product } from "../../../entities/Product/model/types/product";
import { useEditSingleProductMutation } from "../../../app/api/apiSlice";
import { FormResult } from "../../forms/FormResult/FormResult";

import fallback_image from "/fallback_image.jpeg";


export interface EditProductFormProps {
    product: Partial<Product>;
    // handleOnUpdateForm: () => void;
    // handleOnSubmitForm: () => void
}

export const DashProductDetails = memo(( props : EditProductFormProps) => {
    const { product } = props
    const [editSingleProduct, { isLoading, error, isSuccess }] = useEditSingleProductMutation()
    const [imagePreview, setImagePreview] = useState("")
    const [formData, setFormData] = useState({
        _id: "",
        brand: "",
        model: "",
        description: "",
        subcategory: "",
        price: "",
        quantity: 0,
        images: null,
        upc: "",
        category: "",
    });

    useEffect(() => {
        setFormData({...product})
        setImagePreview(product.images)
        // if(formData.price === undefined){
            //     formData.price = "$0"
            // }
            // console.log(product)
    }, [product])
    console.log(formData.images)
        
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setFormData({ ...formData, images: file});

        if (file) {
            const reader = new FileReader();
      
            reader.onloadend = () => {
              setImagePreview(reader.result);
            };
      
            reader.readAsDataURL(file);
        }
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
        formDataToSend.append("image", formData.images);
        formDataToSend.append("_id", formData._id);
        try {
            const result = await editSingleProduct(formDataToSend)
            console.log(result)
        } catch (err){
            console.log(err)
        }
    }

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
                                    src={imagePreview} 
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
