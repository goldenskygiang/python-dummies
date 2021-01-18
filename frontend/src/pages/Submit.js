import React, { useState, useRef } from "react";
import BASE_URL from "../global.js";

import "../css/Submit.css";
import Layout from "../components/Layout";
import Editor from "@monaco-editor/react";
import { FillSpinner as Loader } from "react-spinners-kit";
import Loading from "../components/Loading";
import axios from "axios";

const Submit = (props) => {
  // Will add change theme system
  const theme = "dark";
  const language = "python";
  const [isEditorReady, setIsEditorReady] = useState(false);
  const [isSumitting, setSummitting] = useState(false);
  const valueGetter = useRef();

  const handleEditorDidMount = (_valueGetter) => {
    setIsEditorReady(true);
    valueGetter.current = _valueGetter;
  };

  const getValue = () => {
    return valueGetter.current();
  };

  const updateTotalScore = async (header) => {
    const url = BASE_URL + "/api/users/";
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: header,
          "Content-Type": `multipart/form-data`,
        },
      });
      // console.log("get high score", res.data.score)
      const TotalScore = res.data.score;
      localStorage.setItem("TotalScore", TotalScore);
      window.location.href = "/SubmissionDetail";
    } catch (error) {
      console.error(error);
    }
  };

  const submitCode = async () => {
    const header = "Token " + String(localStorage.token);
    let url =
      BASE_URL + "/api/check_problemset/" + String(props.match.params.id) + "/";
    // console.log("check url", props.match.params.id)

    setSummitting(true);
    const res = await axios({
      method: "post",
      url: url,
      data: JSON.stringify(
        { code: getValue() },
        null,
        parseInt(props.match.params.id)
      ),
      headers: {
        Authorization: header,
        "Content-Type": "application/json",
      },
    });
    // console.log("check submit", res);
    const resData = res.data;
    // console.log("check submit_2", resData);
    localStorage.setItem("Problemscore", resData.score);
    localStorage.setItem("res", resData.test_result);
    localStorage.setItem("time", resData.runtime_result);
    await setTimeout(() => setSummitting(true), 1000);

    await updateTotalScore(header);
  };

  return (
    <Layout>
      <Loading isLoading={isSumitting} />
      <div className="SubmitBody">
        <div className="SubmitTitle">
          <span>Submit a solution</span>
        </div>

        <div className="SubmitProblemId">
          <span className="SubmitProblemIdTitle">Problem code</span>
          <span className="SubmitProblemIdId">P{props.match.params.id}</span>
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
