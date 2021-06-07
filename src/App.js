import "./App.css";
import "./css/card-customize.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import {
  History,
  LikedVideos,
  Navbar,
  Playlist,
  PlaylistCard,
  Sidebar,
  VideoPlayer,
  Videos,
  WatchList,
  PrivateRoute,
  Login,
  Signup,
  UserDetails,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <main>
        <Navbar />
        <div className="main-section">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Videos />} />
            <Route path=":id" element={<VideoPlayer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <PrivateRoute path="/user" element={<UserDetails />} />
            <PrivateRoute path="/playlists" element={<Playlist />} />
            <PrivateRoute path="/playlists/:id" element={<PlaylistCard />} />
            <PrivateRoute path="/liked-videos" element={<LikedVideos />} />
            <PrivateRoute path="/history" element={<History />} />
            <PrivateRoute path="/watch-list" element={<WatchList />} />
          </Routes>
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
