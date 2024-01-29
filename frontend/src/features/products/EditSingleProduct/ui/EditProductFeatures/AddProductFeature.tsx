import { ChangeEvent } from "react"
import { Button, Flex } from "@chakra-ui/react";

import { FormControlItem } from "../FormControlItem/FormControlItem"

interface AddProductFeaturesProps {
    newFeature: string
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleAddFeature: () => void
}

export const AddProductFeatures = (props: AddProductFeaturesProps) => {

    const {newFeature, handleAddFeature, handleChange} = props

    return (
        <Flex w="100%">
            <FormControlItem type="text" title="newFeature" label="newFeature" value={newFeature} handleChange={handleChange} />
            <Button  onClick={handleAddFeature} mt={8} ml={8}>Add Feature</Button>
        </Flex>
    )
}