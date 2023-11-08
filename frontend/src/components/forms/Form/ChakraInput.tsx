import {
    Input,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";

import { FormDataProps } from "../AddSingleProductForm/AddProduct"


interface ChakraInputProps {
    label: string, 
    type: string;
    name: string;
    formData:FormDataProps , 
    handleAction: () => void, 
}

function ChakraInput(props: ChakraInputProps) {
    const { label, formData, handleAction, type, name } = props;
    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <Input
                type={type}
                name={name}
                value={formData.brand}
                onChange={handleAction}
            />
         </FormControl>
    );
}

export default ChakraInput;
