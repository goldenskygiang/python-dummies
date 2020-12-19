import React from "react";
import { Markup } from "interweave";
import hljs from "highlight.js/lib/core";
import "../css/Highlight.css"

const Highlight = ({ language, children }) => {
  return (
    <pre className="hljs">
      <code className={`language-${language}`}>
        <Markup content={hljs.highlight("python", children).value} />
      </code>
    </pre>
  );
};

export default Highlight;