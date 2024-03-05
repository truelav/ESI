import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { Button, VStack, Grid, GridItem } from "@chakra-ui/react";
import { useEditSingleProductMutation } from "../../../app/api/apiSlice";
import { FormResult } from "../../forms/FormResult/FormResult";
import { initialStore } from "../../../features/products/EditSingleProduct/model/store/EditSingleProductInitialStore";
import { prepareDataToSave } from "../../../features/products/EditSingleProduct/model/service/EditSingleProductServices";
import { EditProductInfo } from "../../../features/products/EditSingleProduct/ui/EditProductInfo/EditProductInfo";
import { EditProductPrice } from "../../../features/products/EditSingleProduct/ui/EditProductPrice/EditProductPrice";
import { EditProductFeatures } from "../../../features/products/EditSingleProduct/ui/EditProductFeatures/EditProductFeatures";
import { AddProductFeatures } from "../../../features/products/EditSingleProduct/ui/EditProductFeatures/AddProductFeature";
import { EditProductImages } from "../../../features/products/EditSingleProduct/ui/EditProductImages/EditProductImages";
export const DashProductDetails = memo((props) => {
    const { product } = props;
    const [formData, setFormData] = useState(initialStore);
    const [imagePreview, setImagePreview] = useState(formData.images);
    const [editSingleProduct, { isLoading, error, isSuccess }] = useEditSingleProductMutation();
    console.log(product);
    useEffect(() => {
        setFormData({ ...initialStore, ...product });
        setImagePreview(product.images);
    }, [product]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value, name);
        setFormData({ ...formData, [name]: value });
    };
    const handleEditFeature = (oldFeature, newFeature) => {
        const updatedFeatures = formData.features.map((feature) => (feature === oldFeature ? newFeature : feature));
        setFormData({ ...formData, features: updatedFeatures });
    };
    const handleAddFeature = () => {
        const updatedFeatures = [...formData.features, formData.newFeature];
        setFormData({ ...formData, features: updatedFeatures, newFeature: "" });
        console.log(formData.features);
    };
    const handleDeleteFeature = (feature) => {
        console.log(feature, formData.features);
        const updatedFeatures = formData.features.filter((existingFeature) => {
            return existingFeature != feature;
        });
        setFormData({ ...formData, features: updatedFeatures });
    };
    const handleFileChange = (e) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData({ ...formData, images: file });
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = prepareDataToSave(formData);
        try {
            console.log(formData);
            const result = await editSingleProduct(formDataToSend);
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
    };
    if (isSuccess) {
        return (_jsx(FormResult, { headlineText: `Product Saved ${formData.model} Success`, bodyText: formData.description, children: _jsx(Link, { to: `/products`, children: _jsx(Button, { children: "Check Added Product" }) }) }));
    }
    if (error) {
        return _jsxs("div", { children: ["...Error Adding Product: ", JSON.stringify(error)] });
    }
    if (isLoading) {
        return _jsx("div", { children: "...Is Loading" });
    }
    return (_jsx(_Fragment, { children: _jsx(Grid, { templateColumns: 'repeat(12, 1fr)', gap: 4, children: _jsx(GridItem, { colSpan: 6, colStart: 4, children: _jsx("form", { onSubmit: handleSubmit, encType: "multipart/form-data", children: _jsxs(VStack, { spacing: 4, children: [_jsx(EditProductInfo, { productInfo: formData, handleChange: handleChange }), _jsx(EditProductPrice, { productInfo: formData, handleChange: handleChange }), _jsx(EditProductImages, { handleFileChange: handleFileChange, imagePreview: imagePreview, altInfo: formData.description }), _jsx(AddProductFeatures, { newFeature: formData.newFeature, handleChange: handleChange, handleAddFeature: handleAddFeature }), _jsx(EditProductFeatures, { features: formData.features, handleChange: handleChange, handleEditFeature: handleEditFeature, handleDeleteFeature: handleDeleteFeature }), _jsx(Button, { type: "submit", colorScheme: 'blue', children: "Save Product" })] }) }) }) }) }));
});
