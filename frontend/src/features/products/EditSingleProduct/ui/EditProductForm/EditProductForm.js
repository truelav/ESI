import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Grid, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useEditSingleProductMutation } from "../../../../../app/api/apiSlice";
import { setProductData } from "../../model/slice/editSingleProductSlice";
import { EditProductFeatures } from "../EditProductFeatures/EditProductFeatures";
import { EditProductImages } from "../EditProductImages/EditProductImages";
import { EditProductInfo } from "../EditProductInfo/EditProductInfo";
import { initialStore } from "../../model/store/EditSingleProductInitialStore";
import { prepareDataToSave } from "../../model/service/EditSingleProductServices";
export const EditProductForm = (props) => {
    const dispatch = useDispatch();
    const { product } = props;
    const [editSingleProduct, { isLoading, error, isSuccess }] = useEditSingleProductMutation();
    const [formData, setFormData] = useState(initialStore);
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setFormData({ ...product });
        dispatch(setProductData(product));
    }, [product]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = prepareDataToSave(formData);
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const result = await editSingleProduct(formDataToSend);
            console.log(result);
        }
        catch (err) {
            console.log(err);
        }
    };
    return (_jsx(Grid, { templateColumns: 'repeat(12, 1fr)', gap: 4, children: _jsxs("form", { onSubmit: handleSubmit, encType: "multipart/form-data", children: [_jsx(EditProductInfo, {}), _jsx(EditProductImages, {}), _jsx(EditProductFeatures, {}), _jsx(Button, { type: "submit", colorScheme: 'blue', children: "Save Product" })] }) }));
};
