import React from "react";
import ReactPlayer from "react-player/youtube";

import "./VideoPopUp.scss";

const VideoPopUp = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={`app__video-popup ${show ? "visible" : ""}`}>
      <div className="app__video-popup_opacity-layer" onClick={hidePopup}></div>
      <div className="app__video-popup_video-player">
        <span className="close-btn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopUp;
