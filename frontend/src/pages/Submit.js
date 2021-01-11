import React, { useState, useRef } from "react";
import "../css/Submit.css";
import Layout from "../components/Layout";
import Editor from "@monaco-editor/react";
import { FillSpinner as Loader } from "react-spinners-kit";
import axios from "axios";

const Submit = () => {
  // Will add change theme system
  const theme = "dark";
  const language = "python";
  const [isEditorReady, setIsEditorReady] = useState(false);
  const valueGetter = useRef();

  const handleEditorDidMount = (_valueGetter) => {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  };

  const getValue = () => {
    return valueGetter.current();
  };

  const submitCode = async () => {
    console.log("Submitting code...");
    const res = await axios({
      method: "post",
      url: "/api/check_problemset/1/",
      data: JSON.stringify({ code: getValue() }, null, 1),
      headers: {
        // Authorization: "Token 896fa8b8fe999c94053318a889b21390a6ee4d80",
        "Content-Type": "application/json",
      },
    });
    const resData = res.data[0];
    localStorage.setItem("score", resData.score);
    localStorage.setItem("res", resData.res);
    localStorage.setItem("time", resData.time);
    window.location.href = '/SubmissionDetail';
  };

  return (
    <Layout>
      <div className="SubmitBody">
        <div className="SubmitTitle">
          <span>Submit a solution</span>
        </div>

        <div className="SubmitProblemId">
          <span className="SubmitProblemIdTitle">Problem code</span>
          <span className="SubmitProblemIdId">P001</span>
        </div>

        <div className="SubmitLanguage">
          <span className="SubmitLanguageTitle">Language</span>
          <span className="SubmitLanguageLanguage">Python</span>
        </div>

        <div className="SubmitEditor">
          <div className="SubmitEditorHeader">
            <span>Insert your source code</span>
          </div>

          <Editor
            height="80vh" // By default, it fully fits with its parent
            theme={theme}
            language={language}
            loading={<Loader frontColor="#3dc9b0" backColor="#202124" />}
            editorDidMount={handleEditorDidMount}
          />

          <div className="ProblemSubmitCode" onClick={submitCode}>
            <span>Submit</span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Submit;
