// import { SyntheticEvent, useState } from 'react';
import axios from "axios";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input
} from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from "formik";

import "./styles.css";

function RegistrationForm() {
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "", re_password: "", roles: [], fullName: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) errors.email = "Required";
        if (!values.password) errors.password = "Required";
        if (!values.re_password) errors.re_password = "Required";
        if (values.password !== values.re_password)
          errors.re_password = "Does not match";
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
          errors.email = "Invalid email address";
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await axios({
            method: "POST",
            url: "http://localhost:8888/api/auth/register",
            data: values,
          });
          setSubmitting(false);
          console.log(response.data);
          resetForm();
        } catch (error) {
          setSubmitting(false);
          console.log(error);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="registration-form">
          <FormControl>
            <div className="formik-div">
              <label className="label">Fullname</label>
              <Field type="text" name="name" />
              <ErrorMessage
                name="email"
                component="div"
                className="formik_error_message"
              />
            </div>
          </FormControl>
          <div className="formik-div">
            <label className="label">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="formik_error_message"
            />
          </div>
          <div className="formik-div">
            <label className="label">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="formik_error_message"
            />
          </div>
          <div className="formik-div">
            <label className="label">Re Password</label>
            <Field type="password" name="re_password" />
            <ErrorMessage
              name="re_password"
              component="div"
              className="formik_error_message"
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Register Now
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
