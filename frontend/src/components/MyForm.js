import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { mapKeys } from "lodash";
import "../css/MyForm.css";

const MyField = ({ fieldName, error, touched }) => {
  return (
    <div className="form-group">
      <Field
        name={fieldName}
        type="text"
        placeholder=" "
        className={"form-control" + (error && touched ? " is-invalid" : "")}
      />
      <div className="invalid-feedback-container">
        <ErrorMessage
          name={fieldName}
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div className="underline"></div>
      <label htmlFor={fieldName}>{fieldName}</label>
    </div>
  );
};

const MyForm = ({ validationScheme, initialValue, isOpen, setOpen }) => {
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
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
    } catch (err) {
      setStatus({ success: false });
      setSubmitting(false);
      setErrors({ submit: err.message });
    }
  };

  return (
    <div className={`formik-container ${isOpen ? "" : "closed"}`}>
      <Formik
        initialValue={initialValue}
        validationScheme={validationScheme}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form-container">
              <button type="reset" className="cancel-btn" onClick={handleClose}>
                X
              </button>
              <div className="form-container-inside">
                {Object.keys(initialValue).map((key) => (
                  <MyField
                    error={errors[`${key}`]}
                    touched={touched[`${key}`]}
                    fieldName={key}
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
