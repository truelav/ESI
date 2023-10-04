
// import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from 'formik'
// import {Button} from 'react-bootstrap';
// import {Form} from 'react-bootstrap';

function RegistrationForm() {
  return (
        <Formik
            initialValues={{ name: "", email: '', password: '', re_password: "" }}
            validate={values => {
                const errors = {};
                if (!values.email) errors.email = 'Required';
                if(!values.password) errors.password = 'Required';
                if(!values.re_password) errors.re_password = 'Required';
                if(values.password !== values.re_password) errors.re_password = 'Does not match';
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) errors.email = 'Invalid email address'
                return errors;
            }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                // setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                // setSubmitting(false);
                // console.log(values)
                // }, 400);
                try {
                    const response = await axios({
                        method: "POST",
                        url: "http://localhost:8888/api/auth/register",
                        data: values
                    })
                    setSubmitting(false);
                    console.log(response.data)
                    // resetForm()
                } catch(error){
                    setSubmitting(false)
                    console.log(error)
                }
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                    <label className="label">Fullname</label>
                    <Field type="text" name="name" />
                    <ErrorMessage name="email" component="div" />
                    <label className="label">Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name="email" component="div" />
                    <label className="label">Password</label>
                    <Field type="password" name="password" />
                    <ErrorMessage name="password" component="div" />
                    <label className="label">Re Password</label>
                    <Field type="password" name="re_password" />
                    <ErrorMessage name="re_password" component="div" />
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default RegistrationForm;