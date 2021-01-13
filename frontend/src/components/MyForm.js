import React, { useState } from "react";
import BASE_URL from "../global.js";
import { Formik, Form } from "formik";
import { ClapSpinner as ButtonLoader } from "react-spinners-kit";
import { size } from "lodash";
import MyField from "./MyField";

import "../css/MyForm.css";

import axios from "axios";

const MyForm = ({ validationSchema, initialValues, isOpen, setOpen, type }) => {
  const [isSumitted, setSumitted] = useState(false);
  const [data, setData] = useState({});

  const handleClose = (resetForm) => {
    resetForm({ values: initialValues });
    setOpen(false);
  };

  const InitiateData = (token) =>{
    const header = 'Token ' + String(token)
    const url = BASE_URL + "/api/users/";

    axios.get(url, {
      headers: {
        'Authorization': header,
        'Content-Type': `multipart/form-data`
      }
    })
    .then((res) => {
      // console.log("get high score", res.data.score)
      const username = res.data.username;
      const email = res.data.email;
      const TotalScore = res.data.score;

      localStorage.setItem("token", token);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("TotalScore", TotalScore);

      window.location.href = "/"


    })
    .catch((error) => {
      console.error(error)
    })
  }

  const onSubmit = async (fields, actions) => {
    const { setSubmitting, setStatus, resetForm } = actions;
    try {
      let res;
      const header = 'Token ' + String(localStorage.token)
      const url = BASE_URL + "/api/register/";
      if (type === "signup") {
        res = await axios({
          method: "post",
          url: url,
          data: JSON.stringify(fields, null, size(fields)),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else if (type === "login") {
        const url = BASE_URL + "/api/login/";
        res = await axios({
          method: "post",
          url: url,
          data: JSON.stringify(fields, null, size(fields)),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      resetForm({});
      setStatus({ success: true });
      setSubmitting(true);
      setOpen(false);
      setData(res.data);
      if (type === "login") {
        // console.log("get token done", res.data.token)
        InitiateData(res.data.token);
      }
    } catch (err) {
      // console.log(err.response.data);
      let newFormValues = {};
      let newFormErrors = err.response.data;
      let newFormTouched = {};
      for (let key in fields) {
        if (key === "username" || key === "email") {
          newFormValues[`${key}`] = fields[`${key}`];
          newFormTouched[`${key}`] = true;
        } else {
          newFormValues[`${key}`] = "";
          newFormTouched[`${key}`] = false;
        }
      }
      resetForm({
        values: newFormValues,
        errors: newFormErrors,
        touched: newFormTouched,
      });
      setStatus({ success: false });
      setSubmitting(false);
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
