import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";

const Registration = () => (
  <div className="reg">
    <h1 >Registration</h1>
  <Formik
    initialValues={{ email: "", password: "" }}
    enableReinitialize
    validate={(values) => {
      const errors: { email?: string } = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      return errors;
    }}

    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting, isValid }) => (
        <Form>
        <label htmlFor="email"><br />E-Mail:<br /></label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
        <label htmlFor="password"><br /><br />Password<br /></label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
        <br />
        <button type="submit" disabled={isSubmitting || !isValid}>
          Submit
        </button>
      </Form>
      )}
  </Formik>
  </div>
);


export default Registration;
