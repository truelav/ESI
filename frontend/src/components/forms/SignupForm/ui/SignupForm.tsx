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
    import { Link } from "react-router-dom";
    import { Formik, Form, Field } from "formik";
    import { useSignupMutation } from "../../../../app/api/apiSlice"; 
    import { FormResult } from "../../FormResult/FormResult";
    import { FormHeader } from "../../../../shared/ui/Forms/FormHeader/FormHeader";
    import ErrorText from "../../../../shared/ui/Error/ErrorText";
    

  
  function validateInput() {
    let error;
    // if (!value) {
    //   error = 'Name is required'
    // } else if (value.toLowerCase() !== 'naruto') {
    //   error = "Jeez! You're not a fan 😱"
    // }
    return error;
  }
  
export const SignupForm = () => {
    const [signup, 
      { 
        isLoading: isLoadingSignup, 
        error: errorSignup, 
        isSuccess: isSuccessSignup 
      }
    ] = useSignupMutation();
    
    let content = <></>
  
    if(isLoadingSignup){
      content = (<>Login Loading ...</>)
    }
  
    if(errorSignup){
      content = (
        <>
          <ErrorText errorMessage={`An error has occured while logging in:`}/>
          <ErrorText errorMessage={`${errorSignup}`}/>
        </>
      )
    }
  
    if(isSuccessSignup){
      content = (
        <FormResult headlineText="Create account request send with Success" bodyText="Welcome to ESI">
          <Link to="login">
            <Button>
              Go To Log in
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
                company: "",
                fullname: "",
                phone: "",
                password: "",
                re_password: "",
              }}
              onSubmit={async (values, actions) => {
                  try {
                    const response = await signup(values).unwrap();
                    console.log(response)
                    actions.resetForm();
                    // navigate("/products");
                } catch(err){
                    throw Error("Signup Error occured");
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
                    Sign Up
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
  
  