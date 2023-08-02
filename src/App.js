import "./App.css";
import PlayButton from "./components/PlayButton";
import Video from "./components/Video";
import videos from "./db/Data";

function App() {
  return (
    <>
      <div className="App" onClick={() => console.log("app")}>
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
            >
              {video.title}
            </PlayButton>
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
