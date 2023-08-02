import { useState } from "react";
import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videosDB from "./db/Data";
import AddVideo from "./components/AddVideo";

function App() {
  const [videos, setVideos] = useState(videosDB);

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <>
      <div className="App" onClick={() => console.log("app")}>
        <AddVideo onAddVideos={addVideos}></AddVideo>
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
        <div style={{ clear: "both" }}></div>
      </div>
    </>
  );
}

export default App;
