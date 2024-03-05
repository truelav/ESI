import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Image } from "@chakra-ui/react";
import { FormControlImage } from "../FormControlItem/FormControlImage";
import fallback_image from "/fallback_image.jpeg";
export const EditProductImages = (props) => {
    const { imagePreview, altInfo, handleFileChange } = props;
    return (_jsxs(_Fragment, { children: [_jsx(Image, { src: imagePreview, alt: altInfo, fallbackSrc: fallback_image, objectFit: "contain" }), _jsx(FormControlImage, { handleFileChange: handleFileChange })] }));
};
