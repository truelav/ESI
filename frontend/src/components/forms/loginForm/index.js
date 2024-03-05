import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Container, FormControl, FormLabel, Input, Stack, FormErrorMessage, } from "@chakra-ui/react";
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
    const [login, { isLoading: isLoadingLogin, error: errorLogin, isSuccess: isSuccessLogin }] = useLoginMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(["authToken"]);
    console.log(cookies);
    let content = _jsx(_Fragment, {});
    if (isLoadingLogin) {
        content = (_jsx(_Fragment, { children: "Login Loading ..." }));
    }
    if (errorLogin) {
        content = (_jsxs(_Fragment, { children: [_jsx(ErrorText, { errorMessage: `An error has occured while logging in:` }), _jsx(ErrorText, { errorMessage: `${errorLogin?.data?.message}` })] }));
    }
    if (isSuccessLogin) {
        content = (_jsx(FormResult, { headlineText: "Login Success", bodyText: "Welcome to ESI", children: _jsx(Link, { to: "products", children: _jsx(Button, { children: "Go To Products" }) }) }));
    }
    return (_jsxs(Container, { maxW: "lg", py: { base: "12", md: "24" }, px: { base: "0", sm: "8" }, children: [content, _jsxs(Stack, { spacing: "8", children: [_jsx(FormHeader, {}), _jsx(Box, { py: { base: "0", sm: "8" }, px: { base: "4", sm: "10" }, bg: { base: "transparent", sm: "bg.surface" }, boxShadow: { base: "none", sm: "md" }, borderRadius: { base: "none", sm: "xl" }, children: _jsx(Stack, { spacing: "6", children: _jsx(Formik, { initialValues: {
                                    email: "",
                                    password: "",
                                }, onSubmit: async (values, actions) => {
                                    const response = await login(values).unwrap();
                                    try {
                                        const { accessToken, userDto } = response;
                                        setCookie("authToken", accessToken, { path: "/" });
                                        dispatch(setCredentials({ accessToken, userDto }));
                                        actions.resetForm();
                                        navigate("/products");
                                    }
                                    catch (err) {
                                        throw Error("Log In Error occured");
                                    }
                                }, children: (props) => (_jsxs(Form, { children: [_jsx(Field, { name: "email", validate: validateInput, children: ({ field, form }) => (_jsxs(FormControl, { isInvalid: form.errors.name && form.touched.name, children: [_jsx(FormLabel, { children: "Email" }), _jsx(Input, { ...field, placeholder: "email" }), _jsx(FormErrorMessage, { children: form.errors.name })] })) }), _jsx(Field, { name: "password", validate: validateInput, children: ({ field, form }) => (_jsxs(FormControl, { isInvalid: form.errors.name && form.touched.name, children: [_jsx(FormLabel, { children: "Password" }), _jsx(Input, { ...field, placeholder: "password", type: "password" }), _jsx(FormErrorMessage, { children: form.errors.password })] })) }), _jsx(Button, { mt: 4, colorScheme: "teal", isLoading: props.isSubmitting, type: "submit", children: "Log In" })] })) }) }) })] })] }));
}
