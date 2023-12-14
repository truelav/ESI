import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useCookies } from "react-cookie";
import { useLoginMutation } from "../../../app/api/apiSlice";
import { FormResult } from "../FormResult/FormResult";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../features/auth/slice/authSlice";
// import logo from "/logo.png";
// import { OAuthButtonGroup } from "./OAuthButtonGroup";
// import { PasswordField } from "./PasswordField";

// interface LoginResponseProps {
//   accessToken: string;
//   refreshToken: string;
//   message: string;
//   userDto: object;
// }

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
  const [login, 
    { 
      isLoading: isLoadingLogin, 
      error: errorLogin, 
      isSuccess: isSuccessLogin 
    }
  ] = useLoginMutation();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["authToken"]);

  let content = <></>

  if(isLoadingLogin){
    content = (<>loading ...</>)
  }

  if(errorLogin){
    content = (
      <>
        An error has occured {errorLogin?.status}! : {errorLogin?.data}
      </>
    )
  }

  if(isSuccessLogin){
    content = (
      <FormResult headlineText="Login Success" bodyText="Welcome to ESI">
        <Link to="products">
          <Button>
            Go To Products
          </Button>
        </Link>  
      </FormResult>
    )
  }

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >

      {content}
      <Stack spacing="8">
        <Stack spacing="6">
          {/* <Image src={logo} sizes="sm" className="" alt="ESI Logo" /> */}
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <Link to="/contact">
              <Button>
                <Text color="fg.muted">Don't have an account? Contact Us</Text>
              </Button>
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

                const response = await login(values).unwrap();

                try {
                  const { accessToken, userDto } = response;
                  setCookie("authToken", accessToken, { path: "/" });
                  dispatch(setCredentials({accessToken, userDto}))
                  actions.resetForm();
                  navigate("/products");
                } catch(err){
                  console.log(err)
                  console.log(response)
                  throw Error("Log In Error occured");
                }
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
