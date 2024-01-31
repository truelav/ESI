import { ChangeEvent } from "react"
import { Image } from "@chakra-ui/react"
import { FormControlImage } from "../FormControlItem/FormControlImage"

import fallback_image from "/fallback_image.jpeg";

interface EditProductPriceProps {
    imagePreview: string | null | undefined
    altInfo: string
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditProductImages = (props: EditProductPriceProps) => {
    const { imagePreview, altInfo, handleFileChange } = props

    return (
        <>
            <Image 
                src={imagePreview} 
                alt={altInfo}                                     
                fallbackSrc={fallback_image}
                objectFit="contain"
            />
            <FormControlImage handleFileChange={handleFileChange} />

            
        </>
    )
}