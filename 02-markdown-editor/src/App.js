import React, { useState } from "react";
//  import marked from 'marked'; //JS way to Markdown
import ReactMarkdown from "react-markdown"; // React way to markdown
import "./App.css";

export default function App() {
  const [markdown, setMarkdown] = useState("# suppppp");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

      {/* { <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> } */}

      <ReactMarkdown className="preview" children={markdown} />
    </div>
  );
}
