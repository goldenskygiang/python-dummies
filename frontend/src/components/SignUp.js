import React, { useState } from "react";
import MyForm from "./MyForm";
import * as Yup from "yup";

const SignUp = ({ isOpen, setOpen }) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("User Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      isOpen={isOpen}
      setOpen={setOpen}
      type="signup"
    />
  );
};

export default SignUp;
