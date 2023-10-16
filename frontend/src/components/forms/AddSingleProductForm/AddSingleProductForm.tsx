import { SyntheticEvent, useState } from "react"
import { Button } from "react-bootstrap"
import {useAddSingleProductMutation} from "../../../app/api/apiSlice"

function AddProductForm() {

    const [formValues, setFormValues] = useState({
        _id: "",
        name: "",
        status: "active",
        brand: "",
        description: "",
        category: "",
        subcategory: "",
        quantity: 1,
        price: 1,
        images: [""],
        location: "",
    })

    const [addSingleProduct, {isLoading}] = useAddSingleProductMutation()
    const handleOnUpdateForm = (e: SyntheticEvent) => {
        e.preventDefault()
    }
    const handleOnSubmitForm = async () => { 
        try {
            const result =  await addSingleProduct(formValues).unwrap()
            console.log(result)
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
                    <input className="" id="" name="title" type="text" onChange={handleOnUpdateForm}/>
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

export default AddProductForm;
