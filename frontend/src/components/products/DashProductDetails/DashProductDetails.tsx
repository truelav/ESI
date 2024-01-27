import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, memo, useEffect, useState } from "react";
import { Button, VStack, FormControl, FormLabel, Input, Image, Grid, GridItem } from "@chakra-ui/react";

import { Product } from "../../../entities/Product/model/types/product";
import { useEditSingleProductMutation } from "../../../app/api/apiSlice";
import { FormResult } from "../../forms/FormResult/FormResult";

import { initialStore } from "../../../features/products/EditSingleProduct/model/store/EditSingleProductInitialStore";
import { ProductBulletList } from "../../../shared/ui/Product/ProductBulletList/ProductBulletList";
import { FormControlItem } from "../../../features/products/EditSingleProduct/ui/FormControlItem/FormControlItem";
import { FormControlFeature } from "../../../features/products/EditSingleProduct/ui/FormControlItem/FormControlFeature";
import { prepareDataToSave } from "../../../features/products/EditSingleProduct/model/service/EditSingleProductServices";

import fallback_image from "/fallback_image.jpeg";

export interface EditProductFormProps {
    product: Partial<Product>;
}

export const DashProductDetails = memo(( props : EditProductFormProps) => {
    const { product } = props
    const [editSingleProduct, { isLoading, error, isSuccess }] = useEditSingleProductMutation()
    const [formData, setFormData] = useState(initialStore)
    const [imagePreview, setImagePreview] = useState("")

    useEffect(() => {
        setFormData({...initialStore, ...product})
        setImagePreview(product.images)
    }, [product])

    console.log(formData)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEditFeature = (index: number, updatedFeature: string) => {
        const features = formData.features
        const updatedFeatures = [...features]
        updatedFeatures[index] = updatedFeature
        setFormData({ ...formData, ["features"]: updatedFeature })
    }

    const handleAddFeature = () => {
        const updatedFeatures = [...formData.features, formData.newFeature]
        setFormData({ ...formData, features: updatedFeatures, newFeature: "" })
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

                               <FormControlItem type="text" title="brand" label="brand" value={formData.brand} handleChange={handleChange} />
                               <FormControlItem type="text" title="model" label="model" value={formData.model} handleChange={handleChange} />
                               <FormControlItem type="text" title="description" label="description" value={formData.description} handleChange={handleChange} />
                               <FormControlItem type="text" title="category" label="category" value={formData.category} handleChange={handleChange} />
                               <FormControlItem type="text" title="upc" label="upc" value={formData.upc} handleChange={handleChange} />
                               <FormControlItem type="text" title="price" label="price" value={formData.price} handleChange={handleChange} />
                               <FormControlItem type="text" title="quantity" label="quantity" value={formData.quantity} handleChange={handleChange} />

                                {/* <BulletPoints Components /> */}
                                {/* <EditProductFeatures features={formData.features} newFeature={formData.newFeature} /> */}

                                <FormControlItem type="text" title="newFeature" label="newFeature" value={formData.newFeature} handleChange={handleChange} />
                                <Button onClick={handleAddFeature}>Add Feature</Button>


                                {formData?.features?.map((feature: string, idx: number) => (
                                    <FormControlFeature feature={feature} key={feature} index={idx} handleEditFeature={handleEditFeature}/>
                                ))}


                                <ProductBulletList />

                            <Button type="submit" colorScheme='blue'>Save Product</Button>
                        </VStack>
                    </form>
                </GridItem>
            </Grid>
        </>
    );
});
