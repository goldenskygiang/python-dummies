import React, { useState } from "react";
import { Formik, Form } from "formik";
import { ClapSpinner as ButtonLoader } from "react-spinners-kit";
import MyField from "./MyField";

import "../css/MyForm.css";

import axios from "axios";

const MyForm = ({ validationSchema, initialValues, isOpen, setOpen }) => {
  const [isSumitted, setSumitted] = useState(false);
  const [registerData, setRegisterData] = useState({});

  const handleClose = (resetForm) => {
    resetForm({ values: initialValues });
    setOpen(false);
  };

  const onSubmit = async (fields, actions) => {
    const { setSubmitting, setStatus, setErrors, resetForm } = actions;
    try {
      resetForm({});
      setStatus({ success: true });
      setSubmitting(true);
      // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
      const res = await axios({
        method: "post",
        url: "/api/register/",
        data: JSON.stringify(fields, null, 4),
        headers: {
          Authorization: "Token 896fa8b8fe999c94053318a889b21390a6ee4d80",
          "Content-Type": "application/json",
        },
      });
      setOpen(false);
      setRegisterData(res.data);
    } catch (err) {
      let newForm = {};
      for (let key in fields) {
        if (key === "username" || key === "email") {
          newForm[`${key}`] = fields[`${key}`];
        } else {
          newForm[`${key}`] = "";
        }
      }
      resetForm({ values: newForm });
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: err.message });
    }
    setSumitted(true);
  };

  return (
    <div className={`formik-container ${isOpen ? "" : "closed"}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, resetForm }) => (
          <Form className="form">
            <div className="form-container">
              <button
                type="reset"
                className="cancel-btn"
                onClick={handleClose.bind(null, resetForm)}
              >
                X
              </button>
              <div className="form-container-inside">
                {Object.keys(initialValues).map((fieldName) => (
                  <MyField
                    error={errors[fieldName]}
                    touched={touched[fieldName]}
                    fieldName={fieldName}
                  />
                ))}
                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  <div className="submit-btn-loader">
                    <ButtonLoader />
                  </div>
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

export default MyForm;
