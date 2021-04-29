import React from "react";
import { Link } from "react-router-dom";
import { useGeneralContext } from "../../contexts/general-context";
import "../../css/sidebar.css";
export function Sidebar() {
  const { hamMenu } = useGeneralContext();
  return (
    <div
      className={`sidebar ${hamMenu ? `sidebar-active` : "sidebar-inactive"}`}>
      <ul className="list">
        <Link to="/" className="route-link">
          <li className="sidebar--item">
            <ion-icon name="home"></ion-icon>
            Home
          </li>
        </Link>

        <Link to="/playlists" className="route-link">
          <li className="sidebar--item">
            <ion-icon name="list"></ion-icon>
            Playlists
          </li>
        </Link>

        <Link to="/liked-videos" className="route-link">
          <li className="sidebar--item">
            <ion-icon name="thumbs-up-sharp"></ion-icon>
            Likes
          </li>
        </Link>

        <Link to="/watch-list" className="route-link">
          <li className="sidebar--item">
            <ion-icon name="time-outline"></ion-icon>
            WatchList
          </li>
        </Link>

        <Link to="/history" className="route-link">
          <li className="sidebar--item">
            <ion-icon name="timer-outline"></ion-icon>
            History
          </li>
        </Link>
      </ul>
    </div>
  );
}
