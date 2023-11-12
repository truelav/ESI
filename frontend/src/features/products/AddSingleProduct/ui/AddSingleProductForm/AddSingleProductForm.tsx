import {
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
} from "@chakra-ui/react";
import { ChangeEvent, useState, FormEventHandler } from "react";
import { ProductFormData } from "../../model/data/ProductFormData";
// import { ProductFormDataProps } from "../../model/types/ProductFormDataProps";

interface AddSingleProductFormProps {
    handleAddProductSubmit: FormEventHandler<HTMLFormElement>;
}

export const AddSingleProductForm = (props: AddSingleProductFormProps) => {
    const [formData, setFormData] = useState({ ...ProductFormData });
    const { handleAddProductSubmit } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setFormData({ ...formData, image: file });
    };

    return (
        <form
            onSubmit={() => handleAddProductSubmit(formData)}
            encType="multipart/form-data"
        >
            <VStack spacing={4}>
                <FormControl>
                    <FormLabel>Brand</FormLabel>
                    <Input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Model</FormLabel>
                    <Input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Category</FormLabel>
                    <Input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>UPC</FormLabel>
                    <Input
                        type="text"
                        name="upc"
                        value={formData.upc}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Price</FormLabel>
                    <Input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Quantity</FormLabel>
                    <Input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                    />
                </FormControl>

                <FormControl>
                    <FormLabel>Image</FormLabel>
                    <Input
                        type="file"
                        name="image"
                        accept=".jpg, .png"
                        onChange={handleFileChange}
                    />
                </FormControl>

                <Button type="submit">Save Product</Button>
            </VStack>
        </form>
    );
};
