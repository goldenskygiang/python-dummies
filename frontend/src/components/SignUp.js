import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/SignUp.css";

const SignUp = ({ isOpen }) => {
  return (
    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        userName: Yup.string().required("User Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
      })}
      onSubmit={(fields) => {
        alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
      }}
    >
      {({ errors, status, touched }) => (
        <Form className="form">
          <div className="form-container">
            <div className="form-container-inside">
              <div className="form-group">
                <label htmlFor="userName">User Name</label>
                <Field
                  name="userName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.userName && touched.userName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback"
                />
              </div>
              <button className="btn-signup" type="submit">
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;

