import "./App.css";
import React, { useState, useEffect } from "react";
import ChatRoom from "./components/ChatRoom";
import ChatLoader from "./components/ChatLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return <div>{isLoading ? <ChatLoader /> : <ChatRoom />}</div>;
};

export default App;
