import { ChangeEvent } from "react"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"

export interface FormControlItemProps {
    handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const FormControlImage= (props: FormControlItemProps) => {

    const { handleFileChange } = props

    return (
        <FormControl>
            <FormLabel>Product Image</FormLabel>
            <Input
                type="file"
                name="image"
                accept=".jpg, .png"
                onChange={handleFileChange}
            />
        </FormControl>
    )
}