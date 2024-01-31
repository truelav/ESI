import { ChangeEvent } from "react"
import {FormControlItem } from "../FormControlItem/FormControlItem"

interface ProductPriceProps {
    price: string,
    quantity: string
}

interface EditProductPriceProps {
    productInfo: ProductPriceProps
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditProductPrice = (props: EditProductPriceProps) => {
    const { productInfo, handleChange } = props
    const { price, quantity } = productInfo

    return (
        <>

            <FormControlItem type="text" title="price" label="price" value={price} handleChange={handleChange} />
            <FormControlItem type="text" title="quantity" label="quantity" value={quantity} handleChange={handleChange} />
            
        </>
    )
}