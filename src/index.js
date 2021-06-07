import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WatchListProvider } from "./contexts/watchlist-context";
import { LikeProvider } from "./contexts/like-context";
import { GeneralContextProvider } from "./contexts/general-context";
import { PlaylistProvider } from "./contexts/playlist-context";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/auth-context";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <GeneralContextProvider>
          <WatchListProvider>
            <LikeProvider>
              <PlaylistProvider>
                <App />
              </PlaylistProvider>
            </LikeProvider>
          </WatchListProvider>
        </GeneralContextProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
