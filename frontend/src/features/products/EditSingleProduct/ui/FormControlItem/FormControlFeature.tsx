import { ChangeEvent, useState } from "react"
import { FormControl,FormLabel, Input } from "@chakra-ui/react"

export interface FormControlFeatureProps {
    feature: string
    index: number   
    handleEditFeature: (idx: number, updatedFeature: string) => void
}

export const FormControlFeature= (props: FormControlFeatureProps) => {

    const { feature, index, handleEditFeature } = props
    const [newFeature, setNewFeature] = useState(feature)
    
    return (
        <FormControl>
            <FormLabel>Add/ Edit Feature</FormLabel>
            <Input
                type="text"
                index={index}
                value={newFeature}
                onChange={() => handleEditFeature(index, newFeature)}
            />
        </FormControl>
    )
}