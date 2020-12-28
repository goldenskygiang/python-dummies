import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/SignUp.css";

const LogIn = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className={`formik-container ${isOpen ? "" : "closed"}`}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        })}
        onSubmit={(fields) => {
          alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        }}
      >
        {({ errors, status, touched }) => (
          <Form className="form">
            <div className="form-container">
              <button className="cancel-btn" onClick={handleClose}>X</button>
              <div className="form-container-inside">
                <div className="form-group">
                  <Field
                    name="email"
                    type="text"
                    placeholder=" "
                    className={
                      "form-control" +
                      (errors.email && touched.email ? " is-invalid" : "")
                    }
                  />
                  <div className="invalid-feedback-container">
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="underline"></div>
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-group">
                  <Field
                    name="password"
                    type="password"
                    placeholder=" "
                    className={
                      "form-control" +
                      (errors.password && touched.password ? " is-invalid" : "")
                    }
                  />
                  <div className="invalid-feedback-container">
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="underline"></div>
                  <label htmlFor="password">Password</label>
                </div>
                <button type="submit">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LogIn;
