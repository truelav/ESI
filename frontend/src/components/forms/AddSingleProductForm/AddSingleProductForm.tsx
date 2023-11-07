// import { SyntheticEvent, useState } from 'react';
import {
    Box,
    Container,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    FormErrorMessage,
} from "@chakra-ui/react";
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FormikErrors,
    withFormik,
    FormikProps,
    FieldInputProps,
} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useAddSingleProductMutation } from "../../../app/api/apiSlice";

interface ProductForm {
    name: string;
    brand: string;
    model: string;
    description: string;
    category: string;
    subcategory: string;
    price: number;
    quantity: number;
    images: string;
    upc: string;
}

interface FieldProps {
    field: FieldInputProps<string>;
    form: FormikProps<{ name: string; surname: string }>;
}

const initialValues = {
    brand: "",
    model: "",
    category: "",
    description: "",
    price: 0,
    quantity: 0,
    upc: "",
    images: "",
};

const validationSchema = Yup.object({
    brand: Yup.string().required("Required"),
    model: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    price: Yup.number(),
    quantity: Yup.number(),
    upc: Yup.string().required("Required"),
    images: Yup.string().required("Required"),
});

function validateInput() {
    let error;
    // if (!value) {
    //   error = 'Name is required'
    // } else if (value.toLowerCase() !== 'naruto') {
    //   error = "Jeez! You're not a fan 😱"
    // }
    return error;
}
const AddSingleProductForm = () => {
    //   const { touched, errors, isSubmitting, message } = props;
    //   const initialValues: ProductForm = {};
    const [addSingleProduct] = useAddSingleProductMutation();

    // const handleSubmitAddSingleProduct = (values, actions) => {
    //     const result = addSingleProduct(values).unwrap();
    //     if (!result) {
    //         console.log(addSingleProductError);
    //     } else {
    //         console.log(result);
    //     }
    // };

    return (
        <Container
            maxW="lg"
            py={{ base: "12", md: "24" }}
            px={{ base: "0", sm: "8" }}
        >
            <Stack spacing="8">
                <Stack spacing="6">
                    {/* <Image src={logo} sizes="sm" className="" alt="ESI Logo" /> */}
                    <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                        <Heading size={{ base: "xs", md: "sm" }}>
                            Add New Product
                        </Heading>
                        <Link to="/contact">
                            <Text color="fg.muted">
                                Don't have an account? Contact Us
                            </Text>
                        </Link>
                    </Stack>
                </Stack>
                <Box
                    py={{ base: "0", sm: "8" }}
                    px={{ base: "4", sm: "10" }}
                    bg={{ base: "transparent", sm: "bg.surface" }}
                    boxShadow={{ base: "none", sm: "md" }}
                    borderRadius={{ base: "none", sm: "xl" }}
                >
                    <Stack spacing="6">
                        <Formik
                            initialValues={initialValues}
                            // validationSchema={validationSchema}
                            onSubmit={async (values, actions) => {
                                console.log(values);
                                const result = await addSingleProduct(
                                    values
                                ).unwrap();
                                if (!result) {
                                    console.log("some sort of error happened");
                                } else {
                                    console.log(result);
                                    actions.resetForm({
                                        values: {
                                            ...initialValues,
                                        },
                                    });
                                }
                            }}
                        >
                            {(props) => (
                                <Form>
                                    <Field name="upc" validate={validateInput}>
                                        {({ field, form }: FieldProps) => (
                                            <FormControl
                                            // isInvalid={
                                            //     form.errors?.name &&
                                            //     form.touched.name
                                            // }
                                            >
                                                <FormLabel>UPC</FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder="UPC"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.name}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field
                                        name="brand"
                                        validate={validateInput}
                                    >
                                        {({ field, form }: FieldProps) => (
                                            <FormControl
                                                isInvalid={
                                                    form.errors.name &&
                                                    form.touched.name
                                                }
                                            >
                                                <FormLabel>Brand</FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder="Brand"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.name}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field
                                        name="model"
                                        validate={validateInput}
                                    >
                                        {({ field, form }: FieldProps) => (
                                            <FormControl
                                            // isInvalid={
                                            //     form.errors?.name &&
                                            //     form.touched.name
                                            // }
                                            >
                                                <FormLabel>Model</FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder="Model"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.name}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field
                                        name="description"
                                        validate={validateInput}
                                    >
                                        {({ field, form }: FieldProps) => (
                                            <FormControl
                                            // isInvalid={
                                            //     form.errors?.name &&
                                            //     form.touched.name
                                            // }
                                            >
                                                <FormLabel>
                                                    Description
                                                </FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder="Description"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.name}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field
                                        name="price"
                                        validate={validateInput}
                                    >
                                        {({ field, form }: FieldProps) => (
                                            <FormControl
                                            // isInvalid={
                                            //     form.errors?.name &&
                                            //     form.touched.name
                                            // }
                                            >
                                                <FormLabel>Price</FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder="Price"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.name}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field
                                        name="quantity"
                                        validate={validateInput}
                                    >
                                        {({ field, form }: FieldProps) => (
                                            <FormControl
                                            // isInvalid={
                                            //     form.errors?.name &&
                                            //     form.touched.name
                                            // }
                                            >
                                                <FormLabel>Quantity</FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder="Quantity"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.name}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Field
                                        name="images"
                                        validate={validateInput}
                                    >
                                        {({ field, form }: FieldProps) => (
                                            <FormControl
                                            // isInvalid={
                                            //     form.errors?.name &&
                                            //     form.touched.name
                                            // }
                                            >
                                                <FormLabel>
                                                    Import Image
                                                </FormLabel>
                                                <Input
                                                    {...field}
                                                    placeholder="Import Image"
                                                    type="file"
                                                />
                                                <FormErrorMessage>
                                                    {form.errors.name}
                                                </FormErrorMessage>
                                            </FormControl>
                                        )}
                                    </Field>

                                    <Button
                                        mt={4}
                                        colorScheme="teal"
                                        isLoading={props.isSubmitting}
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Stack>
                </Box>
            </Stack>
        </Container>
    );
};

export default AddSingleProductForm;
