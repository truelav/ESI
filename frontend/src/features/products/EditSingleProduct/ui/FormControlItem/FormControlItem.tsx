import { ChangeEvent } from "react"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"

export interface FormControlItemProps {
    type: string
    title: string   
    label: string
    value: string | number
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const FormControlItem = (props: FormControlItemProps) => {

    const { type, label, title, value, handleChange } = props
    
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input
                type={type}
                name={title}
                value={value}
                onChange={handleChange}
            />
        </FormControl>
    )
}