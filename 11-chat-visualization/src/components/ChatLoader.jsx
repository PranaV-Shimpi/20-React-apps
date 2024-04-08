import React from 'react';

const ChatLoader = () => {
  return (
    <section id="chatApp" className="chatApp">
      <div className="chatApp__loaderWrapper">
        <div className="chatApp__loaderText">Loading...</div>
        <div className="chatApp__loader"></div>
      </div>
    </section>
  );
};

export default ChatLoader;