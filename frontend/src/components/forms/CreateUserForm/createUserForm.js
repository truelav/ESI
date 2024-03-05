import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field } from "formik";
import { FormControl, FormLabel, FormErrorMessage, Input, Button, Select } from "@chakra-ui/react";
import { useAddUserMutation } from "../../../app/api/apiSlice";
export function CreateUserForm({ onClose }) {
    const [addUser,
    // { 
    //   isLoading: isLoadingCreateUser, 
    //   error: errorCreateUser, 
    //   isSuccess: isSuccessCreateUser 
    // }
    ] = useAddUserMutation();
    const RolesOptions = ["CUSTOMER", "ADMIN"];
    // let content = <></>
    // if(isLoadingCreateUser){
    //   content = (<>Signup Loading ...</>)
    // }
    // if(errorCreateUser){
    //   content = (
    //     <>
    //       <ErrorText errorMessage={`An error has occured while Signing Up, please try again later`}/>
    //       <ErrorText errorMessage={`${errorCreateUser}`}/>
    //     </>
    //   )
    // } 
    // if(isSuccessCreateUser){
    //     content = (
    //       <>
    //         <Text>User Created with Success</Text>
    //       </>
    //     )
    // }
    return (_jsx(Formik, { initialValues: {
            name: "",
            email: "",
            password: "",
            role: "CUSTOMER",
            isActive: true,
        }, onSubmit: async (values, actions) => {
            console.log(values);
            const response = await addUser(values).unwrap();
            console.log(response);
            actions.resetForm();
            onClose();
        }, children: (props) => (_jsxs(Form, { children: [_jsx(Field, { name: "name", children: ({ field, form }) => (_jsxs(FormControl, { isInvalid: form.errors.name && form.touched.name, children: [_jsx(FormLabel, { children: "Name" }), _jsx(Input, { ...field, placeholder: "your name" }), _jsx(FormErrorMessage, { children: form.errors.name })] })) }), _jsx(Field, { name: "email", children: ({ field, form }) => (_jsxs(FormControl, { isInvalid: form.errors.name && form.touched.name, children: [_jsx(FormLabel, { children: "Email" }), _jsx(Input, { ...field, placeholder: "email" }), _jsx(FormErrorMessage, { children: form.errors.name })] })) }), _jsx(Field, { name: "password", children: ({ field, form }) => (_jsxs(FormControl, { isInvalid: form.errors.name && form.touched.name, children: [_jsx(FormLabel, { children: "Password" }), _jsx(Input, { ...field, placeholder: "password" }), _jsx(FormErrorMessage, { children: form.errors.password })] })) }), _jsx(Field, { name: "role", children: ({ field, form }) => (_jsxs(FormControl, { isInvalid: form.errors.name && form.touched.name, children: [_jsx(FormLabel, { children: "Role" }), _jsx(Select, { onChange: field.onChange, name: "role", value: "role", children: RolesOptions?.map((optionVal) => (_jsx("option", { value: optionVal, children: optionVal }, optionVal))) }), _jsx(FormErrorMessage, { children: form.errors.name })] })) }), _jsx(Button, { mt: 4, colorScheme: "teal", isLoading: props.isSubmitting, type: "submit", children: "Submit" })] })) }));
}
