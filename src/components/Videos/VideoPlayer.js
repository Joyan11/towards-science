import React from "react";
import "../../css/videoplayer.css";
import { usePlaylist } from "../../contexts/playlist-context";
import { useLike } from "../../contexts/like-context";
import { useWatchList } from "../../contexts/watchlist-context";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import { PlaylistModal } from "./PlaylistModal";
import ReactPlayer from "react-player";

export const VideoPlayer = () => {
  const { dispatch } = usePlaylist();
  const { likeList, dispatchlike } = useLike();
  const { watchList, dispatchwatchlist } = useWatchList();
  const { id } = useParams();

  const getVideoDetails = () => {
    return data.filter((item) => item.id === id)[0];
  };
  const videoData = getVideoDetails();

  const handleLikeHandler = (videoData) => {
    if (likeList.some((item) => item.id === id)) {
      dispatchlike({ type: "REMOVE_FROM_LIKED", payload: videoData.id });
    } else {
      dispatchlike({ type: "ADD_TO_LIKED", payload: videoData });
    }
  };

  const handleWatchlistHandler = (videoData) => {
    if (watchList.some((item) => item.id === id)) {
      dispatchwatchlist({
        type: "REMOVE_FROM_WATCHLIST",
        payload: videoData.id,
      });
    } else {
      dispatchwatchlist({ type: "ADD_TO_WATCHLIST", payload: videoData });
    }
  };

  return (
    <div className="video-player-section">
      <ReactPlayer
        width="1100px"
        height="550px"
        controls
        playing={true}
        url={`https://www.youtube.com/watch?v=${id}`}
      />
      <div className="video-heading">
        <p className=" text-m">{videoData.name}</p>
      </div>

      <div className="video-wrapper">
        <div className="video-category">
          <p className="text-uppercase">#{videoData.category}</p>
        </div>
        <div className="player-btn-container">
          {/* <div className="player-icon-set btn--icon btn--icon--front">
            <ion-icon name="arrow-redo-outline"></ion-icon>
            <div className="player-button-text">SHARE</div>
          </div> */}
          <div
            className="player-icon-set btn--icon btn--icon--front"
            onClick={() => handleWatchlistHandler(videoData)}>
            <ion-icon name="time" className="player-icons"></ion-icon>
            <div className="player-button-text">WATCH LATER</div>
          </div>

          <div
            className="player-icon-set  btn--icon btn--icon--front"
            onClick={() => handleLikeHandler(videoData)}>
            <ion-icon
              name="thumbs-up-sharp"
              className="player-icons"></ion-icon>
            <div className="player-button-text">LIKE</div>
          </div>

          <div
            className="player-icon-set btn--icon btn--icon--front"
            onClick={() =>
              dispatch({ type: "SHOW_PLAYLIST_MODAL", payload: videoData })
            }>
            <ion-icon className="player-icons" name="list-outline"></ion-icon>
            <div className="player-button-text">SAVE</div>
          </div>
        </div>
      </div>

      <PlaylistModal />
    </div>
  );
};
