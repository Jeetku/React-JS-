import React, { useState } from "react";
import "./PlayButton.css";

const PlayButton = ({ message, children, onPlay, onPause }) => {
  // let playing = false; //Don't use this approach
  const [playing, setPlaying] = useState(false);
  const handleClick = (e) => {
    e.stopPropagation();
    if (playing) {
      onPause();
    } else {
      onPlay();
    }
    setPlaying(!playing);
  };
  return (
    <div>
      <button onClick={handleClick}>
        {children} {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default PlayButton;
