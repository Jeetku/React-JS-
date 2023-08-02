import React from "react";
import Video from "./Video";
import PlayButton from "./PlayButton";

const VideoList = ({ videos }) => {
  return (
    <div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            message="Hi"
            onPlay={() => console.log("Play", video.title)}
            onPause={() => console.log("Pause", video.title)}
          ></PlayButton>
        </Video>
      ))}
    </div>
  );
};

export default VideoList;
