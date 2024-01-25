import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEvent } from "react"

interface DashFormItemProps {
    formData: unknown
    value: string | string
    label: string
    type: string
    title: string
    handleChange: (arg0: ChangeEvent<HTMLInputElement>) => void
}

export const DashProductDetailsFormItem = (props: DashFormItemProps) => {
    
    const { handleChange, value, label, type, title } = props

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