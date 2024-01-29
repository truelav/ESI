import { Box, Button, Flex, FormControl, Input } from "@chakra-ui/react"
import { useState, ChangeEvent } from "react"

export interface FormControlFeatureProps {
    feature: string
    index: number
    handleDeleteFeature: (feature: string) => void
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
    handleEditFeature: (feature: string, updatedFeature: string) => void
}

export const FormControlFeature= (props: FormControlFeatureProps) => {

    const { feature, handleEditFeature, handleDeleteFeature } = props
    const [updatedFeature, setUpdatedFeature] = useState(feature)
    const hasChanged = updatedFeature !== feature

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(value, name)
        setUpdatedFeature(value);
    };

    return (
        <FormControl>
            <Flex>
                <Input
                    type="text"
                    value={updatedFeature}
                    onChange={handleChange}
                />
                <Button color="red" onClick={() => handleDeleteFeature(feature)}>Delete</Button>
                {hasChanged && (
                    <Box>
                        <Button color="green" onClick={() => handleEditFeature(feature, updatedFeature)}>X</Button>
                        <Button color="red" onClick={() => handleEditFeature(feature, updatedFeature)}>Y</Button>
                    </Box>
                )}
            </Flex>
        </FormControl>
    )
}