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

            <FormControlItem type="text" title="model" label="model" value={price} handleChange={handleChange} />
            <FormControlItem type="text" title="brand" label="brand" value={quantity} handleChange={handleChange} />
            
        </>
    )
}