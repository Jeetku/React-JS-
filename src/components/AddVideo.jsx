import React, { useState } from "react";
import "./AddVideo.css";
const AddVideo = ({ onAddVideos }) => {
  const initialState = {
    title: "",
    views: "",
    time: "1.5 Year Ago",
    channel: "CodeBeta",
    verified: true,
  };

  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.stopPropagation();
    e.preventDefault();
    // console.log(video);
    onAddVideos(video);
    setVideo(initialState);
  }

  function handleChange(e) {
    e.stopPropagation();
    e.preventDefault();
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={video.title}
        />
        <input
          type="text"
          name="views"
          placeholder="views"
          onChange={handleChange}
          value={video.views}
        />
        <button
          type="submit"
          onClick={handleSubmit}

          //   onClick={() =>
          //     // setVideos([
          //     //   ...videos,
          //     //   {

          //     //   },
          //     // ])
          //   }
        >
          Add Videos
        </button>
      </form>
    </div>
  );
};

export default AddVideo;
