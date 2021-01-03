import React from "react";
import MyForm from "./MyForm";
import * as Yup from "yup";

const LogIn = ({ isOpen, setOpen }) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <MyForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      isOpen={isOpen}
      setOpen={setOpen}
      type="login"
    />
  );
};

export default LogIn;
