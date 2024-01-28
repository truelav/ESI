import { useSelector } from "react-redux"
import { setBrand, setModel } from "../../model/slice/editSingleProductSlice"
import { FormControlInput } from "../FormControlItem/FormControlInput"


export const EditProductInfo = () => {
    const product = useSelector(state => state.editSingleProduct.formData)
    const { brand, model, description, category, subcategory, upc, price, quantity } = product
    console.log(product)
    return (
        <>
            <FormControlInput type="text" title="model" label="model" value={model} handleChange={setModel}/>
            <FormControlInput type="text" title="brand" label="brand" value={brand} handleChange={setBrand}/>
        </>
    )
}