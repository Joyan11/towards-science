import React from "react";
import { Link } from "react-router-dom";

import { usePlaylist } from "../../../contexts/playlist-context";
export const PlaylistContainer = ({ playlist }) => {
  const { dispatch } = usePlaylist();

  const playListImage = (list) => {
    return list[0].id;
  };

  const checkImageExist = (list) => {
    if (list.length !== 0) {
      return `https://img.youtube.com/vi/${playListImage(list)}/mqdefault.jpg`;
    } else {
      return `https://cdn.dribbble.com/users/634336/screenshots/2246883/_____.png?compress=1&resize=800x600`;
    }
  };
  return (
    <div className="playlist-container">
      <div key={playlist.id} className="card card--horizontal video-card">
        <figure className="card--image">
          <img src={checkImageExist(playlist.list)} alt={playlist.name} />
        </figure>
        <div className="card--body">
          <span
            className="playlist-delete"
            onClick={() =>
              dispatch({ type: "DELETE_PLAYLIST", payload: playlist.id })
            }>
            <ion-icon class="card--dismiss" name="trash-outline"></ion-icon>
          </span>
          <span className="card--title">{playlist.name}</span>
          <p className="card--text">
            {playlist.list.length}{" "}
            {playlist.list.length > 1 ? "Videos" : "Video"}
          </p>
          <Link to={`/playlists/${playlist.id}`}>
            {" "}
            <button className="btn btn--rounded btn-primary">
              Watch Playlist
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
