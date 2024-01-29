import { ChangeEvent } from "react"
import {FormControlItem } from "../FormControlItem/FormControlItem"


interface ProductInfoProps {
    brand: string
    model: string
    description: string
    category: string
    upc: string
}

interface EditProductInfoProps {
    productInfo: ProductInfoProps
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditProductInfo = (props: EditProductInfoProps) => {
    const { productInfo, handleChange } = props
    const { brand, model, description, category, upc } = productInfo
    // const product = useSelector(state => state.editSingleProduct.formData)
    // const { brand, model, description, category, subcategory, upc, price, quantity } = product

    return (
        <>

            <FormControlItem type="text" title="model" label="model" value={model} handleChange={handleChange} />
            <FormControlItem type="text" title="brand" label="brand" value={brand} handleChange={handleChange} />
            <FormControlItem type="text" title="description" label="description" value={description} handleChange={handleChange} />
            <FormControlItem type="text" title="category" label="category" value={category} handleChange={handleChange} />
            <FormControlItem type="text" title="upc" label="upc" value={upc} handleChange={handleChange} />

        </>
    )
}