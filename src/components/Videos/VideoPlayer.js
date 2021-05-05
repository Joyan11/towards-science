import React from "react";
import "../../css/videoplayer.css";
import { useEffect } from "react";
import { usePlaylist } from "../../contexts/playlist-context";
import { useLike } from "../../contexts/like-context";
import { useWatchList } from "../../contexts/watchlist-context";
import { useGeneralContext } from "../../contexts/general-context";
import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import { PlaylistModal } from "./PlaylistModal";
import ReactPlayer from "react-player";
import { toastMessages } from "../../utils/toastMessages";

export const VideoPlayer = () => {
  const { dispatchplaylist } = usePlaylist();
  const { likeList, dispatchlike } = useLike();
  const { watchList, dispatchwatchlist } = useWatchList();
  const { dispatchgeneral } = useGeneralContext();
  const { id } = useParams();

  const getVideoDetails = () => {
    return data.filter((item) => item.id === id)[0];
  };
  const videoData = getVideoDetails();

  useEffect(() => {
    dispatchgeneral({ type: "ADD_TO_HISTORY", payload: videoData });
  }, [videoData]);

  const handleLikeHandler = (videoData) => {
    if (likeList.some((item) => item.id === id)) {
      dispatchlike({ type: "REMOVE_FROM_LIKED", payload: videoData.id });
      toastMessages("Video Removed from Likes");
    } else {
      dispatchlike({ type: "ADD_TO_LIKED", payload: videoData });
      toastMessages("Video Added to Likes");
    }
  };

  const handleWatchlistHandler = (videoData) => {
    if (watchList.some((item) => item.id === id)) {
      dispatchwatchlist({
        type: "REMOVE_FROM_WATCHLIST",
        payload: videoData.id,
      });
      toastMessages("Video Removed from Watch List");
    } else {
      dispatchwatchlist({ type: "ADD_TO_WATCHLIST", payload: videoData });
      toastMessages("Video Added to Watch List");
    }
  };

  const watchListToggle = (itemid) => {
    if (watchList.some((item) => item.id === itemid)) {
      return "watchlist-active";
    } else {
      return undefined;
    }
  };

  const likeListToggle = (itemid) => {
    if (likeList.some((item) => item.id === itemid)) {
      return "likelist-active";
    } else {
      return undefined;
    }
  };

  return (
    <div className="video-player-section">
      <div className="player">
        <ReactPlayer
          className="react-player"
          width="100%"
          height="100%"
          controls
          playing={true}
          url={`https://www.youtube.com/watch?v=${id}`}
        />
      </div>

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
            className={`player-icon-set btn--icon btn--icon--front ${watchListToggle(
              videoData.id
            )}`}
            onClick={() => handleWatchlistHandler(videoData)}>
            <ion-icon name="time" className="player-icons"></ion-icon>
            <div className="player-button-text">WATCH LATER</div>
          </div>

          <div
            className={`player-icon-set  btn--icon btn--icon--front ${likeListToggle(
              videoData.id
            )}`}
            onClick={() => handleLikeHandler(videoData)}>
            <ion-icon
              name="thumbs-up-sharp"
              className="player-icons"></ion-icon>
            <div className="player-button-text">LIKE</div>
          </div>

          <div
            className="player-icon-set btn--icon btn--icon--front"
            onClick={() =>
              dispatchplaylist({
                type: "SHOW_PLAYLIST_MODAL",
                payload: videoData,
              })
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
