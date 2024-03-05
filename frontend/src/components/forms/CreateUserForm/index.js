import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { SyntheticEvent, useState } from 'react';
import axios from "axios";
import { FormControl } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./styles.css";
function RegistrationForm() {
    return (_jsx(Formik, { initialValues: { name: "", email: "", password: "", re_password: "", roles: [], fullName: "" }, validate: (values) => {
            const errors = {};
            if (!values.email)
                errors.email = "Required";
            if (!values.password)
                errors.password = "Required";
            if (!values.re_password)
                errors.re_password = "Required";
            if (values.password !== values.re_password)
                errors.re_password = "Does not match";
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                errors.email = "Invalid email address";
            return errors;
        }, onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const response = await axios({
                    method: "POST",
                    url: "http://localhost:8888/api/auth/register",
                    data: values,
                });
                setSubmitting(false);
                console.log(response.data);
                resetForm();
            }
            catch (error) {
                setSubmitting(false);
                console.log(error);
            }
        }, children: ({ isSubmitting }) => (_jsxs(Form, { className: "registration-form", children: [_jsx(FormControl, { children: _jsxs("div", { className: "formik-div", children: [_jsx("label", { className: "label", children: "Fullname" }), _jsx(Field, { type: "text", name: "name" }), _jsx(ErrorMessage, { name: "email", component: "div", className: "formik_error_message" })] }) }), _jsxs("div", { className: "formik-div", children: [_jsx("label", { className: "label", children: "Email" }), _jsx(Field, { type: "email", name: "email" }), _jsx(ErrorMessage, { name: "email", component: "div", className: "formik_error_message" })] }), _jsxs("div", { className: "formik-div", children: [_jsx("label", { className: "label", children: "Password" }), _jsx(Field, { type: "password", name: "password" }), _jsx(ErrorMessage, { name: "password", component: "div", className: "formik_error_message" })] }), _jsxs("div", { className: "formik-div", children: [_jsx("label", { className: "label", children: "Re Password" }), _jsx(Field, { type: "password", name: "re_password" }), _jsx(ErrorMessage, { name: "re_password", component: "div", className: "formik_error_message" })] }), _jsx("button", { type: "submit", disabled: isSubmitting, children: "Register Now" })] })) }));
}
export default RegistrationForm;
