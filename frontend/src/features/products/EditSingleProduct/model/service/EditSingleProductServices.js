/* eslint-disable @typescript-eslint/no-explicit-any */
export const prepareDataToSave = (formData) => {
    const formDataToSend = new FormData();
    formDataToSend.append("_id", formData._id);
    formDataToSend.append("brand", formData.brand);
    formDataToSend.append("model", formData.model);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("upc", formData.upc);
    formDataToSend.append("price", formData.price);
    formDataToSend.append("quantity", formData.quantity);
    formDataToSend.append("images", formData.images);
    formDataToSend.append("features", JSON.stringify(formData.features));
    return formDataToSend;
};
