import React, { useEffect, useState } from "react";
import "./AddVideo.css";
const AddVideo = ({ onAddVideos, editableVideos, updateVideo }) => {
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
    if (editableVideos) {
      updateVideo(video);
    } else {
      onAddVideos(video);
    }

    setVideo(initialState);
  }

  function handleChange(e) {
    e.stopPropagation();
    e.preventDefault();
    // console.log(e.target.name, e.target.value);
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideos) {
      setVideo(editableVideos);
    }
  }, [editableVideos]);

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={handleChange}
          value={video.title}
          required
        />
        <input
          type="text"
          name="views"
          placeholder="views"
          onChange={handleChange}
          value={video.views}
          required
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
          {editableVideos ? "Edit" : "  Add Videos"}
        </button>
      </form>
    </div>
  );
};

export default AddVideo;
