// import { SyntheticEvent, useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from "formik";
// function LoginForm() {

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) errors.email = "Required";
//         if (!values.password) errors.password = "Required";
//         return errors;
//       }}
// onSubmit={async (values, { setSubmitting, resetForm }) => {
//   try {
//     const response = await axios({
//       method: "POST",
//       url: "http://localhost:8888/api/auth/login",
//       data: values,
//     });
//     setSubmitting(false);

//     console.log(response?.headers);
//     resetForm();
//   } catch (error) {
//     setSubmitting(false);
//     console.log(error);
//   }
// }}
//       onSubmit={async (values) => {
//         console.log(values)
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <label className="label">Email</label>
//           <Field type="email" name="email" />
//           <ErrorMessage name="email" component="div" />
//           <label className="label">Password</label>
//           <Field type="password" name="password" />
//           <ErrorMessage name="password" component="div" />
//           <button type="submit" disabled={isSubmitting}>
//             Login
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// }

// export default LoginForm;

import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import logo from "/logo.png";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { PasswordField } from "./PasswordField";
import { useLoginMutation } from "../../../app/api/apiSlice";

function validateInput() {
  let error;
  // if (!value) {
  //   error = 'Name is required'
  // } else if (value.toLowerCase() !== 'naruto') {
  //   error = "Jeez! You're not a fan 😱"
  // }
  return error;
}

export function LoginForm() {
  const [login] = useLoginMutation();
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Image src={logo} sizes="sm" className="" alt="ESI Logo" />
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
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
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                console.log(values);
                const response = await login(values).unwrap();
                console.log(response);
                // const response = await addNewUser(values).unwrap();
                // console.log(response);
                // actions.resetForm();
                // onClose();
              }}
            >
              {(props) => (
                <Form>
                  <Field name="email" validate={validateInput}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>Email</FormLabel>
                        <Input {...field} placeholder="email" />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password" validate={validateInput}>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.name && form.touched.name}
                      >
                        <FormLabel>Password</FormLabel>
                        <Input {...field} placeholder="password" />
                        <FormErrorMessage>
                          {form.errors.password}
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
}

{
  /* <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button>Sign in</Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack> */
}
