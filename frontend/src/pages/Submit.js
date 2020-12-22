import React, { useState, useRef } from "react";
import "../css/Submit.css";
import Layout from "../components/Layout";
import Editor from "@monaco-editor/react";
import { FillSpinner as Loader } from "react-spinners-kit";

const generateRandomUniqeID = () => {
  return (Math.random().toString(36).substring(2) + (new Date().getTime().toString(36)));
}

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
    return valueGetter.current;
  }

  const submit = () => {
    let ID = generateRandomUniqeID();
  }

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
        
        <div className = "SubmitEditor">
            <div className = "SubmitEditorHeader">
                <span>Insert your source code</span>
            </div>

            <Editor
            height="80vh" // By default, it fully fits with its parent
            theme={theme}
            language={language}
            loading={<Loader frontColor="#3dc9b0" backColor="#202124" />}
            editorDidMount={handleEditorDidMount}
            />
        </div>
      </div>
    </Layout>
  );
};

export default Submit;
