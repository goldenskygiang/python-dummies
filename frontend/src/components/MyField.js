import React from "react";
import { Field, ErrorMessage } from "formik";
import { words, capitalize } from "lodash";

const MyField = ({ fieldName, error, touched, isSubmited, extraError, type }) => {
  const parseFieldName = (fieldName) =>
    words(fieldName).reduce(
      (label, namePart) => `${label} ${capitalize(namePart)}`,
      ""
    );

  return (
    <div className="form-group">
      <Field
        name={fieldName}
        type={
          fieldName === "password" || fieldName === "confirmPassword"
            ? "password"
            : "text"
        }
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
      <label htmlFor={fieldName}>{parseFieldName(fieldName)}</label>
    </div>
  );
};

export default MyField;
