import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useCookies } from "react-cookie";
import { useLoginMutation } from "../../../app/api/apiSlice";
import { FormResult } from "../FormResult/FormResult";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../../features/auth/slice/authSlice";
import { FormHeader } from "../../../shared/ui/Forms/FormHeader/FormHeader";
import ErrorText from "../../../shared/ui/Error/ErrorText";

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
  console.log(cookies)

  let content = <></>

  if(isLoadingLogin){
    content = (<>Login Loading ...</>)
  }

  if(errorLogin){
    content = (
      <>
        <ErrorText errorMessage={`An error has occured while logging in:`}/>
        <ErrorText errorMessage={`${errorLogin?.data?.message}`}/>
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
        <FormHeader />
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
                      <Input {...field} placeholder="password" type="password" />
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

