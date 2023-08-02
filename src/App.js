import { useState } from "react";
import "./App.css";
// import PlayButton from "./components/PlayButton";
// import Video from "./components/Video";
import videosDB from "./db/Data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(videosDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <>
      <div className="App" onClick={() => console.log("app")}>
        <AddVideo onAddVideos={addVideos}></AddVideo>
        <VideoList videos={videos}></VideoList>

        <div style={{ clear: "both" }}></div>
      </div>
    </>
  );
}

export default App;
