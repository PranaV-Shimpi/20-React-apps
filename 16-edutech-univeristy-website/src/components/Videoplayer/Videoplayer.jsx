import React, { useRef } from "react";
import "./Videoplayer.css";
import Uni_Video from "../../assets/Uni_Video.mp4";

const Videoplayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
      var video = document.getElementById("video-player");
      video.pause();
    }
  };

  return (
    <div
      className={`videoplayer ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={Uni_Video} autoPlay muted controls id="video-player"></video>
    </div>
  );
};

export default Videoplayer;
