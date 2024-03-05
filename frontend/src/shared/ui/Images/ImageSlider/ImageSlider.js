import { jsx as _jsx } from "react/jsx-runtime";
import ImageGallery from "react-image-gallery";
import "../../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import "./ImageSlider.css";
export const ImageSlider = (props) => {
    const images = props.images.map((image) => ({ original: image, thumbnail: image }));
    console.log(images);
    return (_jsx(ImageGallery, { items: images }));
};
