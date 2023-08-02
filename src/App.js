import { useState } from "react";
import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videosDB from "./db/Data";

function App() {
  const [videos, setVideos] = useState(videosDB);
  return (
    <>
      <div className="App" onClick={() => console.log("app")}>
        <div>
          <button
            type=""
            onClick={() =>
              setVideos([
                ...videos,
                {
                  id: videos.length + 1,
                  title: "TypScript JS Tutorial",
                  views: "50K",
                  time: "1.5 Year Ago",
                  channel: "CodeBeta",
                  verified: true,
                },
              ])
            }
          >
            Add Videos
          </button>
        </div>
        Videos
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
        <div style={{ clear: "both" }}>
          {/* <PlayButton
            message="Hi"
            onPlay={() => console.log("Play")}
            onPause={() => alert("Pause")}
          >
            Play
          </PlayButton> */}
          {/* <PlayButton message="Hi" >
            Pause
          </PlayButton> */}
        </div>
      </div>
    </>
  );
}

export default App;
