import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, memo, useEffect, useState } from "react";
import { Button, VStack, FormControl, FormLabel, Input, Image, Grid, GridItem } from "@chakra-ui/react";

import { useEditSingleProductMutation } from "../../../app/api/apiSlice";
import { Product } from "../../../entities/Product/model/types/product";
import { FormResult } from "../../forms/FormResult/FormResult";

import { initialStore } from "../../../features/products/EditSingleProduct/model/store/EditSingleProductInitialStore";
import { prepareDataToSave } from "../../../features/products/EditSingleProduct/model/service/EditSingleProductServices";

import fallback_image from "/fallback_image.jpeg";
import { EditProductInfo } from "../../../features/products/EditSingleProduct/ui/EditProductInfo/EditProductInfo";
import { EditProductPrice } from "../../../features/products/EditSingleProduct/ui/EditProductPrice/EditProductPrice";
import { EditProductFeatures } from "../../../features/products/EditSingleProduct/ui/EditProductFeatures/EditProductFeatures";
import { AddProductFeatures } from "../../../features/products/EditSingleProduct/ui/EditProductFeatures/AddProductFeature";

export interface EditProductFormProps {
    product: Partial<Product>;
}

export const DashProductDetails = memo(( props : EditProductFormProps) => {
    const { product } = props
    const [imagePreview, setImagePreview] = useState("")
    const [formData, setFormData] = useState(initialStore)
    const [editSingleProduct, { isLoading, error, isSuccess }] = useEditSingleProductMutation()

    useEffect(() => {
        setFormData({...initialStore, ...product})
        setImagePreview(product.images[0])
    }, [product])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(value, name)
        setFormData({ ...formData, [name]: value });
    };

    const handleEditFeature = (oldFeature: string, newFeature: string) => {
        const updatedFeatures = formData.features.map((feature) => (feature === oldFeature ? newFeature : feature))
        setFormData({...formData, features: updatedFeatures});
    }

    const handleAddFeature = () => {
        const updatedFeatures = [...formData.features, formData.newFeature]
        setFormData({ ...formData, features: updatedFeatures, newFeature: "" })
    }

    const handleDeleteFeature = (feature: string) => {
        console.log(feature, formData.features)
        const updatedFeatures = formData.features.filter((existingFeature) => {
           return existingFeature != feature
        })
        setFormData({...formData, features: updatedFeatures})
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData({ ...formData, images: file});

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              setImagePreview(reader.result);
            }
            reader.readAsDataURL(file);
        }
    };


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formDataToSend = prepareDataToSave(formData)

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
                headlineText={`Product Saved ${formData.model} Success`}
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
            <Grid templateColumns='repeat(12, 1fr)' gap={4}>
                <GridItem colSpan={6}>
                    <Image 
                        src={imagePreview} 
                        alt={formData.description}                                     
                        fallbackSrc={fallback_image}
                        objectFit="contain"
                    />
                    <FormControl>
                        <FormLabel>Image</FormLabel>
                        <Input
                            type="file"
                            name="image"
                            accept=".jpg, .png"
                            onChange={handleFileChange}
                        />
                    </FormControl>

                </GridItem>
                <GridItem colSpan={6}>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">
                        <VStack spacing={4}>

                                <EditProductInfo productInfo={formData} handleChange={handleChange}/>
                                <EditProductPrice productInfo={formData} handleChange={handleChange} />

                                <AddProductFeatures 
                                    newFeature={formData.newFeature}  
                                    handleChange={handleChange} 
                                    handleAddFeature={handleAddFeature}
                                /> 
                                <EditProductFeatures 
                                    features={formData.features} 
                                    handleChange={handleChange}
                                    handleEditFeature={handleEditFeature} 
                                    handleDeleteFeature={handleDeleteFeature} 
                                /> 
                               
                            <Button type="submit" colorScheme='blue'>Save Product</Button>
                        </VStack>
                    </form>
                </GridItem>
            </Grid>
        </>
    );
});
