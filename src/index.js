import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WatchListProvider } from "./contexts/watchlist-context";
import { LikeProvider } from "./contexts/like-context";
import { PlaylistProvider } from "./contexts/playlist-context";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <WatchListProvider>
        <LikeProvider>
          <PlaylistProvider>
            <App />
          </PlaylistProvider>
        </LikeProvider>
      </WatchListProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
