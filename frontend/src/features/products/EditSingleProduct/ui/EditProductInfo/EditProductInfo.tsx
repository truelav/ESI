import { FormControlItem } from "../FormControlItem/FormControlItem"

import { EditProductInfoType } from "../../model/type/EditProductTypes"

interface EditProductInfoProps {
    productInfo: EditProductInfoType
}

export const EditProductInfo = (props: EditProductInfoProps) => {

    const { brand, model, description, price, quantity,  upc, category, subcategory, handleChange } = props.productInfo
    // const prodInfoItems = [brand, model, description, price, quantity, upc, category, subcategory]

    return (
        <>
            <FormControlItem type="text" title="model" label="model" value={model} handleChange={handleChange} />

            <FormControlItem type="text" title="brand" label="brand" value={brand} handleChange={handleChange} />
        </>
    )
}