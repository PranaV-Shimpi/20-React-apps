import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import HooksDocs from "./HooksDocs";
import "./HookDetail.css"; // Import custom CSS file
import HookExamples from './HookExamples';

const HookDetail = () => {
  const { hookName } = useParams();
  const hook = HooksDocs[hookName];
  const hookExample = HookExamples[hookName];

  return (
    <div className="hook-detail-container">
      <div>
        <Link to="/" className="back-link">
          Back
        </Link>
      </div>
      <div>
        <h2>{hookName}</h2>
        <p>{hook.description}</p>
      </div>
      <div className="code-block">
        <h3>Code</h3>
        <pre>
          <code>{hook.code}</code>
        </pre>
      </div>
      <a
        href={hook.link}
        target="_blank"
        rel="noopener noreferrer"
        className="learn-more-link"
      >
        Learn more
      </a>
      <div className="visualization">
        <h3>Visualization</h3>
        <HookExamples hookName={hookName} />
      </div>
    </div>
  );
};

export default HookDetail;
