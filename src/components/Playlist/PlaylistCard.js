import React from "react";
import "../../css/video-list-section.css";
import { usePlaylist } from "../../contexts/playlist-context";
import { useParams, Link } from "react-router-dom";
import { PageHeading } from "../PageHeading";
import { thumbnail } from "../../utils/thumbnail";
import { useSinglelistData } from "../../hooks/usePlaylistData/useSinglistData";
import { useGeneralContext } from "../../contexts/general-context";
import { Puff } from "../Loader/Puff";
import { removeFromPlaylist } from "../../api/playlist/removeFromPlaylist";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const PlaylistCard = () => {
  const { playList, playlistId, dispatchplaylist } = usePlaylist();
  const { loader } = useGeneralContext();
  const { id } = useParams();
  useLocalStorage();
  const playlist = useSinglelistData(playlistId, id);
  const getPlaylistData = (list, id) => {
    return list?.find((item) => item._id === id);
  };

  const playlistData =
    playList.length !== 0
      ? getPlaylistData(playList, id)
      : getPlaylistData(playlist, id);

  return (
    <div>
      <PageHeading
        name={`Playlist/${playlistData ? playlistData.name : "..."}`}
      />
      <div className="video-list-section">
        {loader && <Puff />}{" "}
        {playlistData?.list.map((playlistitem) => {
          return (
            <div
              kay={playlistitem._id}
              className="card card--verticle card--l video-card">
              <figure className="card--image">
                <span
                  onClick={() =>
                    removeFromPlaylist(
                      playlistId,
                      id,
                      playlistitem._id,
                      dispatchplaylist
                    )
                  }>
                  {" "}
                  <ion-icon
                    class="card--dismiss"
                    name="close-circle"></ion-icon>
                </span>{" "}
                <Link to={`/${playlistitem._id}`} className="link">
                  <img
                    src={thumbnail(playlistitem._id)}
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
