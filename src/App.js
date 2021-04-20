import "./App.css";
import "./css/card-customize.css";
import { Navbar } from "./components/Navbar";
import { Videos } from "./components/Videos/Videos";
import { Playlist } from "./components/pages/Playlist/Playlist";
import { LikedVideos } from "./components/pages/Likes/LikedVideos";
import { WatchList } from "./components/pages/Watchlist/WatchList";
import { VideoPlayer } from "./components/Videos/VideoPlayer";
import { PlaylistCard } from "./components/pages/Playlist/PlaylistCard";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Videos />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/playlists/:id" element={<PlaylistCard />} />
          <Route path="/liked-videos" element={<LikedVideos />} />
          <Route path="/watch-list" element={<WatchList />} />
          <Route path=":id" element={<VideoPlayer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
