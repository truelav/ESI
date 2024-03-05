import * as Yup from "yup";
// export const validateSignupInput = () => {
// }
export const validateSignupInput = Yup.object().shape({
    fullname: Yup.string().required('Full name is required'),
    company: Yup.string().required('Company name is required'),
    phone: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    retypePassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please retype your password'),
});
