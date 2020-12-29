import React from "react";
import MyForm from "./MyForm";
import * as Yup from "yup";

const LogIn = ({ isOpen, setOpen }) => {
  const initialValue = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().required("Password is required"),
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

export default LogIn;
