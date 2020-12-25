
import React, { useState, useRef } from "react";
import { render } from "react-dom";

import Editor from "@monaco-editor/react";
import { ClapSpinner as Loader } from "react-spinners-kit";

/**
 *
 * @param {string} lessonName - Getting lesson's name
 * Using lesson's name as the name for the component
 * and for the api's destination
 *
 * @param {string} code - Set and get code's value
 * Parent component will get code's value through using prop
 */
const CodeEditor = (lessonName, code) => {
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

  // Render editor
  render(
    <Editor
      height="90vh" // By default, it fully fits with its parent
      theme={theme}
      language={language}
      loading={<Loader frontColor="#3dc9b0" backColor="#202124" />}
      editorDidMount={handleEditorDidMount}
    />
  );
};

export default CodeEditor;
