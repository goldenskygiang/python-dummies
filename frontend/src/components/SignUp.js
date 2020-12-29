import React from "react";
import MyForm from "./MyForm";
import * as Yup from "yup";

const SignUp = ({ isOpen, setOpen }) => {
  const initialValue = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required("User Name is required"),
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
      initialValue={initialValue}
      validationSchema={validationSchema}
      isOpen={isOpen}
      setOpen={setOpen}
    />
  );
};

export default SignUp;
