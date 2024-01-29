import { ChangeEvent } from "react"
import { FormControlFeature } from "../FormControlItem/FormControlFeature"

interface EditProductFeaturesProps {
    features: string[]
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleDeleteFeature: (feature: string) => void
    handleEditFeature: (index: number, updatedFeature: string) => void
}

export const EditProductFeatures = (props: EditProductFeaturesProps) => {

    const {features, handleChange, handleEditFeature, handleDeleteFeature} = props

    return (
        <>
            {features?.map((feature: string, idx: number) => (
                <FormControlFeature 
                    key={feature} 
                    index={idx}
                    feature={feature} 
                    handleChange={handleChange}
                    handleEditFeature={handleEditFeature}
                    handleDeleteFeature={handleDeleteFeature}
                />
            ))}
        </>
    )
}