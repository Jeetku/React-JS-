import React from "react";
import "./Video.css";
const Video = ({
  title,
  channel = "Code Beta",
  views,
  time,
  verified,
  id,
  children,
  deleteVideo,
}) => {
  return (
    <>
      <div className="container">
        <button className="close" onClick={() => deleteVideo(id)}>
          X
        </button>

        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="images" />
        </div>

        <div className="title">{title}</div>

        <div className="channel">
          {channel} {verified ? "✅" : null}
        </div>

        <div className="views">
          {views} views <span>.</span>
          {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Video;
