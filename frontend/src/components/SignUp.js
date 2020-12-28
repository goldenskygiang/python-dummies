import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/SignUp.css";

const SignUp = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false);
  }

  return (
    <div className={`formik-container ${isOpen ? "" : "closed"}`}>
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
              <button className="cancel-btn" onClick={handleClose}>X</button>
              <div className="form-container-inside">
                <div className="form-group">
                  <Field
                    name="userName"
                    type="text"
                    placeholder=" "
                    className={
                      "form-control" +
                      (errors.userName && touched.userName ? " is-invalid" : "")
                    }
                  />
                  <div className="invalid-feedback-container">
                    <ErrorMessage
                      name="userName"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="underline"></div>
                  <label htmlFor="userName">User Name</label>
                </div>
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
                <div className="form-group">
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder=" "
                    className={
                      "form-control" +
                      (errors.confirmPassword && touched.confirmPassword
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <div className="invalid-feedback-container">
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="underline"></div>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>
                <button type="submit" className="submit-btn">
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

export default SignUp;
