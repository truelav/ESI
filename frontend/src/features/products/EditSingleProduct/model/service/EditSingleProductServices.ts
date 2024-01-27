import { ChangeEvent } from "react";

export const handleChange = (e: ChangeEvent<HTMLInputElement>, formData, setFormData) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

// export const handleFileChange = (e: ChangeEvent<HTMLInputElement>, formData, setFormData) => {
//     const file = e.target.files ? e.target.files[0] : null;
//     setFormData({ ...formData, images: file});

//     if (file) {
//         const reader = new FileReader();
//         reader.onloadend = () => {
//         //   setImagePreview(reader.result);
//         }
//         reader.readAsDataURL(file);
//     }
// };

export const setImagePreview = () => {

}

export const prepareDataToSave = (formData) => {
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