import { ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import { FormControl, FormLabel, Input } from "@chakra-ui/react"

export interface FormControlInputProps {
    type: string
    title: string   
    label: string
    value: string | number
}

export const FormControlInput = (props: FormControlInputProps) => {
    const dispatch = useDispatch()
    const { type, label, title, value, handleChange } = props

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(value)
        dispatch(handleChange(value))
    }

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input
                type={type}
                name={title}
                value={value}
                onChange={handleInputChange}
            />
        </FormControl>
    )
}