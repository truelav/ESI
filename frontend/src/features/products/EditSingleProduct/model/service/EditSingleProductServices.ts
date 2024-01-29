import { ChangeEvent } from "react";


export const handleTextChange = () => {

}

export const prepareDataToSave = (formData: any) => {
    const formDataToSend = new FormData();

    formDataToSend.append("_id", formData._id);
    formDataToSend.append("brand", formData.brand);
    formDataToSend.append("model", formData.model);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category)
    formDataToSend.append("upc", formData.upc);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("quantity", formData.quantity);
    formDataToSend.append("images", formData.images);
    formDataToSend.append("features", formData.features);

    return formDataToSend
}