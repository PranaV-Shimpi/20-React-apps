import React from 'react';
import './HookExamples.css'; 
import { hooksExamples } from './HooksExamples';

const HookExamples = ({ hookName }) => {
  const ExampleComponent = hooksExamples[hookName];

  return (
    <div className="hooks-examples-container">
      <div className="example-component">
        {ExampleComponent ? <ExampleComponent /> : <p>No example available for {hookName}</p>}
      </div>
    </div>
  );
};

export default HookExamples;
