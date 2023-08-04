import { useState } from "react";
import "./App.css";
// import PlayButton from "./components/PlayButton";
// import Video from "./components/Video";
import videosDB from "./db/Data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videosDB);

  const [editableVideos, setEditableVideos] = useState(null);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    console.log(id);
    setVideos(videos.filter((video) => video.id !== id));
  }

  function editVideo(id) {
    console.log(id);
    setEditableVideos(videos.find((video) => video.id === id));
  }

  function updateVideo(video) {
    // console.log(video);
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
    // console.log(newVideos);
  }

  return (
    <>
      <div className="App" onClick={() => console.log("app")}>
        <AddVideo
          onAddVideos={addVideos}
          editableVideos={editableVideos}
          updateVideo={updateVideo}
        ></AddVideo>
        <VideoList
          videos={videos}
          onDeleteVideo={deleteVideo}
          onEditVideo={editVideo}
        ></VideoList>

        <div style={{ clear: "both" }}></div>
      </div>
    </>
  );
}

export default App;
