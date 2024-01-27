import { ChangeEvent } from "react"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"

export interface FormControlItemProps {
    type: string
    title: string   
    label: string
    accept: string 
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const FormControlImage= (props: FormControlItemProps) => {

    const { type, label, title, accept, handleChange } = props

    {/* <FormControl>
    <FormLabel>Brand</FormLabel>
    <Input
        type="text"
        name="brand"
        value={formData.brand}
        onChange={handleChange}
        />
    </FormControl> */}
    
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input
                type={type}
                name={title}
                accept={accept}
                onChange={handleChange}
            />
        </FormControl>
    )
}