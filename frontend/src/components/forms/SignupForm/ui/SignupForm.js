import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Container, FormControl, FormLabel, Stack, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSignupMutation } from "../../../../app/api/apiSlice";
import { FormResult } from "../../FormResult/FormResult";
import { FormHeader } from "../../../../shared/ui/Forms/FormHeader/FormHeader";
import ErrorText from "../../../../shared/ui/Error/ErrorText";
import { initialValues } from "../model/initialValues";
import { validateSignupInput } from "../model/validators";
import "./SignupStyle.css";
export const SignupForm = () => {
    const [signup, { isLoading: isLoadingSignup, error: errorSignup, isSuccess: isSuccessSignup }] = useSignupMutation();
    let content = _jsx(_Fragment, {});
    if (isLoadingSignup) {
        content = (_jsx(_Fragment, { children: "Signup Loading ..." }));
    }
    if (errorSignup) {
        content = (_jsxs(_Fragment, { children: [_jsx(ErrorText, { errorMessage: `An error has occured while Signing Up, please try again later` }), _jsx(ErrorText, { errorMessage: `${errorSignup}` })] }));
    }
    if (isSuccessSignup) {
        content = (_jsx(FormResult, { headlineText: "Create account request send with Success", bodyText: "Welcome to ESI", children: _jsx(Link, { to: "/login", children: _jsx(Button, { children: "Go To Log in" }) }) }));
    }
    else {
        content = (_jsxs(Stack, { spacing: "8", children: [_jsx(FormHeader, {}), _jsx(Box, { py: { base: "0", sm: "8" }, px: { base: "4", sm: "10" }, bg: { base: "transparent", sm: "bg.surface" }, boxShadow: { base: "none", sm: "md" }, borderRadius: { base: "none", sm: "xl" }, children: _jsx(Stack, { spacing: "6", children: _jsx(Formik, { initialValues: initialValues, validationSchema: validateSignupInput, onSubmit: async (values, actions) => {
                                try {
                                    const response = await signup(values).unwrap();
                                    console.log(response);
                                    actions.resetForm();
                                }
                                catch (err) {
                                    throw Error("Signup Error occured");
                                }
                            }, children: ({ isSubmitting }) => (_jsxs(Form, { children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Full Name" }), _jsx(Field, { type: "text", name: "fullname", className: "signup-input" }), _jsx(ErrorMessage, { name: "fullname", component: `div`, className: "error-message" })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Company" }), _jsx(Field, { type: "text", name: "company", className: "signup-input" }), _jsx(ErrorMessage, { name: "company", component: `div`, className: "error-message" })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Phone Number" }), _jsx(Field, { type: "text", name: "phone", className: "signup-input" }), _jsx(ErrorMessage, { name: "phone", component: `div`, className: "error-message" })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Email" }), _jsx(Field, { type: "email", name: "email", className: "signup-input" }), _jsx(ErrorMessage, { name: "email", component: `div`, className: "error-message" })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Password" }), _jsx(Field, { type: "password", name: "password", className: "signup-input" }), _jsx(ErrorMessage, { name: "password", component: `div`, className: "error-message" })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { id: "retypePassword", children: "Retype Password" }), _jsx(Field, { type: "password", name: "retypePassword", className: "signup-input" }), _jsx(ErrorMessage, { name: "retypePassword", component: `div`, className: "error-message" })] }), _jsx(Button, { mt: 4, colorScheme: "teal", isLoading: isSubmitting, disabled: isSubmitting, type: "submit", children: "Sign Up" })] })) }) }) })] }));
    }
    return (_jsx(Container, { maxW: "lg", py: { base: "12", md: "24" }, px: { base: "0", sm: "8" }, children: content }));
};
