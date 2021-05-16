import React from "react";
import "../../css/videoplayer.css";
import { useEffect } from "react";
import { usePlaylist } from "../../contexts/playlist-context";
import { useLike } from "../../contexts/like-context";
import { useWatchList } from "../../contexts/watchlist-context";
import { useGeneralContext } from "../../contexts/general-context";
import { useParams } from "react-router-dom";
import { PlaylistModal } from "./PlaylistModal";
import ReactPlayer from "react-player";
import { addToWatchlist } from "../../api/watchlist/addToWatchlist";
import { removeFromWatchlist } from "../../api/watchlist/removeFromWatchlist";
import { addToLikes } from "../../api/likes/addToLikes";
import { removeFromLikes } from "../../api/likes/removeFromLikes";
import { addToHistory } from "../../api/history/addToHistory";
import { useVideoPlayer } from "../../hooks/useVideoData/useVideoPlayer";
import { Puff } from "../Loader/Puff";

export const VideoPlayer = () => {
  const { dispatchplaylist } = usePlaylist();
  const { likeList, likeId, dispatchlike } = useLike();
  const { watchList, watchlistId, dispatchwatchlist } = useWatchList();
  const { history, historyId, loader, dispatchgeneral } = useGeneralContext();
  const { id } = useParams();
  const videoData = useVideoPlayer(id);

  useEffect(() => {
    if (
      videoData &&
      history.some((item) => item?._id === videoData?._id) === false
    ) {
      addToHistory(historyId, videoData, dispatchgeneral);
    }
  }, [videoData]);

  const handleLikeHandler = (videoData) => {
    if (likeList.some((item) => item._id === id)) {
      removeFromLikes(likeId, videoData._id, dispatchlike);
    } else {
      addToLikes(likeId, videoData, dispatchlike);
    }
  };

  const handleWatchlistHandler = (videoData) => {
    if (watchList.some((item) => item._id === id)) {
      removeFromWatchlist(watchlistId, videoData._id, dispatchwatchlist);
    } else {
      addToWatchlist(watchlistId, videoData, dispatchwatchlist);
    }
  };

  const watchListToggle = (itemid) => {
    if (watchList.some((item) => item._id === itemid)) {
      return "watchlist-active";
    } else {
      return undefined;
    }
  };

  const likeListToggle = (itemid) => {
    if (likeList.some((item) => item._id === itemid)) {
      return "likelist-active";
    } else {
      return undefined;
    }
  };

  return (
    <div className="video-player-section">
      {loader && <Puff />}
      {videoData && (
        <>
          {" "}
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
                  videoData._id
                )}`}
                onClick={() => handleWatchlistHandler(videoData)}>
                <ion-icon name="time" className="player-icons"></ion-icon>
                <div className="player-button-text">WATCH LATER</div>
              </div>

              <div
                className={`player-icon-set  btn--icon btn--icon--front ${likeListToggle(
                  videoData._id
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
                <ion-icon
                  className="player-icons"
                  name="list-outline"></ion-icon>
                <div className="player-button-text">SAVE</div>
              </div>
            </div>
          </div>
          <PlaylistModal />
        </>
      )}
    </div>
  );
};
