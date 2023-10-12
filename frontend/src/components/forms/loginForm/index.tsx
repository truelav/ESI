// import { SyntheticEvent, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
// import { authService } from '../../../features/auth/services/authService';

function LoginForm() {



  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) errors.email = "Required";
        if (!values.password) errors.password = "Required";
        return errors;
      }}
      // onSubmit={async (values, { setSubmitting, resetForm }) => {
      //   try {
      //     const response = await axios({
      //       method: "POST",
      //       url: "http://localhost:8888/api/auth/login",
      //       data: values,
      //     });
      //     setSubmitting(false);

      //     console.log(response?.headers);
      //     resetForm();
      //   } catch (error) {
      //     setSubmitting(false);
      //     console.log(error);
      //   }
      // }}
      onSubmit={async (values) => {
        console.log(values)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label className="label">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label className="label">Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
