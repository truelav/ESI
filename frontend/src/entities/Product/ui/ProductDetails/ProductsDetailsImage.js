import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Card } from "@chakra-ui/react";
import { ImageSlider } from "../../../../shared/ui/Images/ImageSlider/ImageSlider";
export const ProductDetailsImage = (props) => {
    const { images } = props;
    return (_jsx(_Fragment, { children: _jsx(Card, { maxW: '', variant: "unstyled", children: _jsx(ImageSlider, { images: images }) }) }));
};
