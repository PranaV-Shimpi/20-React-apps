import React, { useRef } from 'react';
import { IoSendSharp } from "react-icons/io5";

const InputMessage = ({ isLoading, owner, ownerAvatar, sendMessageLoading, typing, resetTyping }) => {
  const ownerInputRef = useRef(null);
  const ownerAvatarInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleSendMessage = (event) => {
    event.preventDefault();
    /* Disable sendMessage if the message is empty */
    if (messageInputRef.current.value.length > 0) {
      sendMessageLoading(ownerInputRef.current.value, ownerAvatarInputRef.current.value, messageInputRef.current.value);
      /* Reset input after send*/
      messageInputRef.current.value = '';
    }
  };

  const handleTyping = () => {
    /* Tell users when another user has at least started to write */
    if (messageInputRef.current.value.length > 0) {
      typing(ownerInputRef.current.value);
    } else {
      /* When there is no more character, the user no longer writes */
      resetTyping(ownerInputRef.current.value);
    }
  };

  /* If the chatbox state is loading, loading class for display */
  const loadingClass = isLoading ? 'chatApp__convButton--loading' : '';
  const sendButtonIcon = <IoSendSharp size={23}/>;

  return (
    <form onSubmit={handleSendMessage}>
      <input
        type="hidden"
        ref={ownerInputRef}
        value={owner}
      />
      <input
        type="hidden"
        ref={ownerAvatarInputRef}
        value={ownerAvatar}
      />
      <input
        type="text"
        ref={messageInputRef}
        className={"chatApp__convInput"}
        placeholder="Text message"
        onKeyDown={handleTyping}
        onKeyUp={handleTyping}
        tabIndex="0"
      />
      <div className={'chatApp__convButton ' + loadingClass} onClick={handleSendMessage}>
        {sendButtonIcon}
      </div>
    </form>
  );
};

export default InputMessage;
