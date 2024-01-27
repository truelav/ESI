import ImageGallery from "react-image-gallery"
import  "../../../../../node_modules/react-image-gallery/styles/css/image-gallery.css"
import "./ImageSlider.css"

const imageList = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

interface ProductImagesProps {
    images: string[] | []
}  

export const ImageSlider = (props: ProductImagesProps) => {

    const { images } = props
    console.log(images)
    
    return (
        <ImageGallery items={imageList} />
    )
}