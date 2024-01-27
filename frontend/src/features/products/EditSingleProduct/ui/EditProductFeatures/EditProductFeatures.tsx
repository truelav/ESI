import { ChangeEvent } from "react"
import { FormControlFeature } from "../FormControlItem/FormControlFeature"

interface EditProductFeaturesProps {
    features: string[]
    newFeature: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const EditProductFeatures = (props: EditProductFeaturesProps) => {

    const {features, newFeature} = props

    return (
        <>
            Features List:
            <FormControlFeature feature={newFeature}/>
            {features.map((feature: string, idx: number) => (
                <FormControlFeature feature={feature} key={feature} index={idx} />
            ))}
        </>
    )
}