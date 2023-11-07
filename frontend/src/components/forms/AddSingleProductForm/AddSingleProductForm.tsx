// import { SyntheticEvent, useState } from 'react';
import {
  Box,
  Container,
  Button,
  // Checkbox,
  // Divider,
  // HStack,
  Image,
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
import { Link } from "react-router-dom";
import { useAddSingleProductMutation } from "../../../app/api/apiSlice";

function validateInput() {
  let error;
  // if (!value) {
  //   error = 'Name is required'
  // } else if (value.toLowerCase() !== 'naruto') {
  //   error = "Jeez! You're not a fan 😱"
  // }
  return error;
}

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

const AddSingleProductForm = () => {
  //   const { touched, errors, isSubmitting, message } = props;
  //   const initialValues: ProductForm = {};
  const [addSingleProduct, { isLoading }] = useAddSingleProductMutation();
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
            <Heading size={{ base: "xs", md: "sm" }}>Add Product</Heading>
            <Link to="/contact">
              <Text color="fg.muted">Don't have an account? Contact Us</Text>
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
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={async (values, actions) => {
                const response = await addSingleProduct(values).unwrap();
                if (response) {
                  console.log(response);
                  actions.resetForm();
                  // navigate("/products");
                } else {
                  throw Error("Log In Error occured");
                }
                // onClose();
              }}
            >
              {(props) => (
                <Form>
                  <Field name="brand" validate={validateInput}>
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>Brand</FormLabel>
                        <Input {...field} placeholder="Brand" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="model" validate={validateInput}>
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={form.errors?.name && form.touched.name}
                      >
                        <FormLabel>Model</FormLabel>
                        <Input {...field} placeholder="Model" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="description" validate={validateInput}>
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={form.errors?.name && form.touched.name}
                      >
                        <FormLabel>Description</FormLabel>
                        <Input {...field} placeholder="Description" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="Image" validate={validateInput}>
                    {({ field, form }: FieldProps) => (
                      <FormControl
                        isInvalid={form.errors?.name && form.touched.name}
                      >
                        <FormLabel>Image</FormLabel>
                        <Input {...field} placeholder="Image" type="file" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
