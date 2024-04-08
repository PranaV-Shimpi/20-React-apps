import React, { useState } from 'react';
import Title from './Title';
import MessageList from './MessageList';
import TypingIndicator from './TypingIndicator';
import InputMessage from './InputMessage';

const ChatBox = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessageLoading = (sender, senderAvatar, message) => {
    setIsLoading(true);
    props.sendMessage(sender, senderAvatar, message);
    setTimeout(() => {
      setIsLoading(false);
    }, 400);
  };

  return (
    <div className={"chatApp__conv"}>
      <Title owner={props.owner} />
      <MessageList owner={props.owner} messages={props.messages} />
      <div className={"chatApp__convSendMessage clearfix"}>
        <TypingIndicator owner={props.owner} isTyping={props.isTyping} />
        <InputMessage
          isLoading={isLoading}
          owner={props.owner}
          ownerAvatar={props.ownerAvatar}
          sendMessage={props.sendMessage}
          sendMessageLoading={sendMessageLoading}
          typing={props.typing}
          resetTyping={props.resetTyping}
        />
      </div>
    </div>
  );
};

export default ChatBox;

