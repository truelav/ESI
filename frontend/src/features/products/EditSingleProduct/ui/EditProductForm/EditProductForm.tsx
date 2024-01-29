import { useEffect, useState, FormEvent } from "react"
import { Grid,Button } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"

import { useEditSingleProductMutation } from "../../../../../app/api/apiSlice"
import { setProductData } from "../../model/slice/editSingleProductSlice"

import { EditProductFeatures } from "../EditProductFeatures/EditProductFeatures"
import { EditProductImages } from "../EditProductImages/EditProductImages"
import { EditProductInfo } from "../EditProductInfo/EditProductInfo"

import { initialStore } from "../../model/store/EditSingleProductInitialStore"
import { prepareDataToSave } from "../../model/service/EditSingleProductServices"

import { EditProductFormProps } from "../../../../../components/products/DashProductDetails/DashProductDetails"

export const EditProductForm = ( props : EditProductFormProps ) => {
    const dispatch = useDispatch()
    const { product } = props
    const [editSingleProduct, { isLoading, error, isSuccess }] = useEditSingleProductMutation()

    const [formData, setFormData] = useState(initialStore)

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setFormData({...product})
        dispatch(setProductData(product))
    }, [product])

    const handleTextChange = () => {
        
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formDataToSend = prepareDataToSave(formData)

        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const result = await editSingleProduct(formDataToSend)
            console.log(result)
        } catch (err){
            console.log(err)
        }
    }

    return (
        <Grid templateColumns='repeat(12, 1fr)' gap={4}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">

                <EditProductInfo  />
                <EditProductImages />
                <EditProductFeatures />

                <Button type="submit" colorScheme='blue'>Save Product</Button>
            </form>
        </Grid>
    )
}