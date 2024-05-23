import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextword) => {
    setTimeout(function () {
      setResultData((prev) => prev + nextword);
    }, 95 * index);
  };

  const newChat = () => {
    setLoading(false)
    setShowResult(false)
  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt !== undefined) {
      response = await run(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await run(input);
    }

    let responseArray = response.split("**");

    let newResponse = "";

    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    const newResponse2 = newResponse
      .replace(/```([\s\S]*?)```/g, (match, p1) => {
        // Convert code blocks to a div with class 'code-block'
        return `<div class="code-block">${p1}</div>`;
      })
      .replace(/(\*|\b\d+\b)/g, (match) => {
        // Add line breaks for asterisks and numbers
        return "</br>" + match;
      });

    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }

    setLoading(false);
    setInput("");
  };

  

  // onSent("what is react.js")

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    run,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
