import React from "react";
import "../../css/video-list-section.css";
import { usePlaylist } from "../../contexts/playlist-context";
import { useParams, Link, Navigate } from "react-router-dom";
import { toastMessages } from "../../utils/toastMessages";
import { PageHeading } from "../PageHeading";
import { thumbnail } from "../../utils/thumbnail";
export const PlaylistCard = () => {
  const { playList, dispatchplaylist } = usePlaylist();
  const { id } = useParams();
  const playlistData = playList.find((item) => item.id === id);

  const deleteFromPlaylist = (playlistid, playlistitemid) => {
    dispatchplaylist({
      type: "REMOVE_FROM_PLAYLIST",
      playlistId: playlistid,
      videoData: playlistitemid,
    });
    toastMessages("Video Removed from Playlist");
  };

  return (
    <div>
      <PageHeading name={`Playlist/${playlistData.name}`} />
      <div className="video-list-section">
        {playlistData.list.map((playlistitem) => {
          return (
            <div
              kay={playlistitem.id}
              className="card card--verticle card--l video-card">
              <figure className="card--image">
                <span onClick={() => deleteFromPlaylist(id, playlistitem.id)}>
                  {" "}
                  <ion-icon
                    class="card--dismiss"
                    name="close-circle"></ion-icon>
                </span>{" "}
                <Link to={`/${playlistitem.id}`} className="link">
                  <img
                    src={thumbnail(playlistitem.id)}
                    alt={playlistitem.name}
                  />{" "}
                </Link>
              </figure>
              <div className="card--body">
                {" "}
                <span clasNames="card--title">{playlistitem.name}</span>
                <p className="card--text"> {playlistitem.category} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
