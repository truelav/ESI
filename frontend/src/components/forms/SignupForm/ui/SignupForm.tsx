import {
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSignupMutation } from "../../../../app/api/apiSlice"; 
import { FormResult } from "../../FormResult/FormResult";
import { FormHeader } from "../../../../shared/ui/Forms/FormHeader/FormHeader";
import ErrorText from "../../../../shared/ui/Error/ErrorText";
import { initialValues } from "../model/initialValues";
import { validateSignupInput } from "../model/validators";
    
import "./SignupStyle.css"
  
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
      content = (<>Signup Loading ...</>)
    }
  
    if(errorSignup){
      content = (
        <>
          <ErrorText errorMessage={`An error has occured while Signing Up, please try again later`}/>
          <ErrorText errorMessage={`${errorSignup}`}/>
        </>
      )
    } 
  
    if(isSuccessSignup){
        content = (
            <FormResult headlineText="Create account request send with Success" bodyText="Welcome to ESI">
                <Link to="/login">
                    <Button>
                        Go To Log in
                    </Button>
                </Link>  
            </FormResult>
        )
    } else {
        content = (
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
                    initialValues={initialValues}
                    validationSchema={validateSignupInput}
                    onSubmit={async (values, actions) => {
                        try {
                            const response = await signup(values).unwrap();
                            console.log(response)
                            actions.resetForm();
                        } catch(err){
                            throw Error("Signup Error occured");
                        }
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form>            
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Field 
                                    type="text" 
                                    name="fullname" 
                                    className="signup-input"
                                />
                                <ErrorMessage name="fullname" component={`div`}className="error-message"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Company</FormLabel>
                                <Field type="text" name="company" className="signup-input"/>
                                <ErrorMessage name="company" component={`div`}className="error-message"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Phone Number</FormLabel>
                                <Field type="text" name="phone" className="signup-input"/>
                                <ErrorMessage name="phone" component={`div`}className="error-message"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Field type="email" name="email" className="signup-input"/>
                                <ErrorMessage name="email" component={`div`}className="error-message"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Field type="password" name="password" className="signup-input"/>
                                <ErrorMessage name="password" component={`div`}className="error-message"/>
                            </FormControl>
                            <FormControl>
                                <FormLabel id="retypePassword">Retype Password</FormLabel>
                                <Field type="password" name="retypePassword" className="signup-input"/>
                                <ErrorMessage name="retypePassword" component={`div`} className="error-message"/>
                            </FormControl>

                            <Button
                                mt={4}
                                colorScheme="teal"
                                isLoading={isSubmitting}
                                disabled={isSubmitting}
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
        )
    }
  
    return (
        <Container
            maxW="lg"
            py={{ base: "12", md: "24" }}
            px={{ base: "0", sm: "8" }}
        >
            {content}
        </Container>
    );
  }
  
  