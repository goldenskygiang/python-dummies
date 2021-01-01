import React from "react";
import { Formik, Form } from "formik";
import MyField from "./MyField";
import "../css/MyForm.css";

import axios from "axios";

const MyForm = ({ validationSchema, initialValues, isOpen, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = async (fields, actions) => {
    const { setSubmitting, setStatus, setErrors, resetForm } = actions;
    try {
      resetForm({});
      setStatus({ success: true });
      setSubmitting(true);
      setOpen(false);
      // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));

      axios({
        method: "post",
        url: "/api/register/",
        data: JSON.stringify(fields, null, 4),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token 896fa8b8fe999c94053318a889b21390a6ee4d80",
        },
      });
    } catch (err) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: err.message });
    }
  };

  return (
    <div className={`formik-container ${isOpen ? "" : "closed"}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form-container">
              <button type="reset" className="cancel-btn" onClick={handleClose}>
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

export default MyForm;
