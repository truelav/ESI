import {
  Box,
  Button,
  Container,
  // Checkbox,
  // Divider,
  // HStack,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Formik, Form, Field } from "formik";
// import { jwtDecode } from "jwt-decode";
import { useLoginMutation } from "../../../app/api/apiSlice";
import logo from "/logo.png";
// import { OAuthButtonGroup } from "./OAuthButtonGroup";
// import { PasswordField } from "./PasswordField";

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
  const [cookies, setCookie] = useCookies(["refreshToken"]);
  const navigate = useNavigate();
  // console.log(cookies)
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
                // console.log(values);
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const response = await login(values).unwrap();
                if (response) {
                  console.log(response);
                  actions.resetForm();
                  navigate("/products");
                }
                // onClose();
              }}
            >
              {(props) => (
                <Form>
                  <Field name="email" validate={validateInput}>
                    {({ field, form }: never) => (
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
                    {({ field, form }: never) => (
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
