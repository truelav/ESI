import { ChangeEvent, useState } from "react"
import { Button } from "react-bootstrap"
import {useAddSingleProductMutation} from "../../../app/api/apiSlice"

function AddSingleProductForm() {

    const [formValues, setFormValues] = useState({
        name: "VAIO Laptop",
        status: "active",
        brand: "VAIO",
        description: "Model: VWFC71639 Windows 11 Home 13th Gen Intel Core i7-1355U Processor (3.70 GHz, up to 5.00 GHz, 12M Cache) ",
        category: "electronics",
        subcategory: "laptops",
        quantity: 1,
        price: 1,
        images: ["https://fastly.picsum.photos/id/460/600/400.jpg?hmac=txE53BmGsSPaNUp4ZhIQmbewaKJFtGHlb5kPaS96s8c"],
        location: "chisinau",
    })

    const [addSingleProduct, {isLoading}] = useAddSingleProductMutation()

    const handleResetFormInputs = () => {
        setFormValues({
            name: "",
            status: "",
            brand: "",
            description: "",
            category: "",
            subcategory: "",
            quantity: 1,
            price: 1,
            images: ["https://fastly.picsum.photos/id/460/600/400.jpg?hmac=txE53BmGsSPaNUp4ZhIQmbewaKJFtGHlb5kPaS96s8c"],
            location: "",
        })
    }

    const handleOnUpdateForm = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    const handleOnSubmitForm = async () => { 
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const result =  await addSingleProduct(formValues).unwrap()
            console.log(result)
            handleResetFormInputs()
        } catch(error){
            console.log("Failed to save new producet : " + error)
        }
    }

    let content = <div></div>;

    if(isLoading) {
        content = <div>Loading ...</div>
    } else {
        content = (
            <div className="">
                <div className="">
                    <p>Title</p>
                    <input className="" id="" name="name" type="text" onChange={handleOnUpdateForm}/>
                </div>
                <div>
                    <p>Status</p>
                    <select>
                        <option value="active">Active</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>
                <div className="">
                    <p>Product Brand</p>
                    <input className="" id="" name="brand" type="text" onChange={handleOnUpdateForm}/>
                </div>
                <div className="">
                    <p>Product Description</p>
                    <input className="" id="" name="description" type="text" onChange={handleOnUpdateForm}/>
                </div>
                <div className="">
                <input className="" id="" name="image" type="file" />
                </div>
                <div className="">
                    <p>Product Description</p>
                    <input className="" id="" name="description" type="text" onChange={handleOnUpdateForm}/>
                </div>
                <div>
                    <Button onClick={handleOnSubmitForm}>Save Changes</Button>
                </div>
            </div>
        );
    }


    return (
        <>
        <div>{content}</div>
        </>
    );
}

export default AddSingleProductForm;
