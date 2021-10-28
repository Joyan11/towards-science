import React from "react";
import { Link } from "react-router-dom";
import { deletePlaylist } from "../../api/playlist/deletePlaylist";
import Image from "../../assets/images/default2.png";
import { useAuth } from "../../contexts/auth-context";
import { usePlaylist } from "../../contexts/playlist-context";

export const PlaylistContainer = ({ playlist }) => {
  const { dispatchplaylist } = usePlaylist();
  const { token } = useAuth();
  const playListImage = (list) => {
    return list[0]._id;
  };

  const checkImageExist = (list) => {
    if (list.length !== 0) {
      return `https://img.youtube.com/vi/${playListImage(list)}/mqdefault.jpg`;
    } else {
      return Image;
    }
  };

  return (
    <div className="playlist-container">
      <div key={playlist._id} className="card card--horizontal video-card">
        <figure className="card--image">
          <img src={checkImageExist(playlist.list)} alt={playlist.name} />
        </figure>
        <div className="card--body">
          <span
            className="playlist-delete"
            onClick={() =>
              deletePlaylist(playlist._id, dispatchplaylist, token)
            }>
            <ion-icon class="card--dismiss" name="trash-outline"></ion-icon>
          </span>
          <span className="card--title">{playlist.name}</span>
          <p className="card--text">
            {playlist.list.length}{" "}
            {playlist.list.length > 1 ? "Videos" : "Video"}
          </p>
          <Link to={`/playlists/${playlist._id}`}>
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
