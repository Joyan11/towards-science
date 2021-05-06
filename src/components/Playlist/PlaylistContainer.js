import React from "react";
import { Link } from "react-router-dom";

import { usePlaylist } from "../../contexts/playlist-context";
import { toastMessages } from "../../utils/toastMessages";
export const PlaylistContainer = ({ playlist }) => {
  const { dispatchplaylist } = usePlaylist();

  const playListImage = (list) => {
    return list[0].id;
  };

  const checkImageExist = (list) => {
    if (list.length !== 0) {
      return `https://img.youtube.com/vi/${playListImage(list)}/mqdefault.jpg`;
    } else {
      return `http://fenceup.in/urtexsolutions/img/default2.png`;
    }
  };

  const deletePlaylist = (playlistid) => {
    dispatchplaylist({
      type: "DELETE_PLAYLIST",
      payload: playlistid,
    });
    toastMessages("Playlist Deleated");
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
            onClick={() => deletePlaylist(playlist.id)}>
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
