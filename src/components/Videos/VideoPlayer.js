import React from "react";
import "../../css/videoplayer.css";
import { useEffect, useState } from "react";
import { usePlaylist } from "../../contexts/playlist-context";
import { useLike } from "../../contexts/like-context";
import { useWatchList } from "../../contexts/watchlist-context";
import { useGeneralContext } from "../../contexts/general-context";
import { useNavigate, useParams } from "react-router-dom";
import { PlaylistModal } from "./PlaylistModal";
import ReactPlayer from "react-player";
import { addToWatchlist } from "../../api/watchlist/addToWatchlist";
import { removeFromWatchlist } from "../../api/watchlist/removeFromWatchlist";
import { addToLikes } from "../../api/likes/addToLikes";
import { removeFromLikes } from "../../api/likes/removeFromLikes";
import { addToHistory } from "../../api/history/addToHistory";
import { useVideoPlayer } from "../../hooks/useVideoData/useVideoPlayer";
import { Puff } from "../Loader/Puff";
import { useAuth } from "../../contexts/auth-context";
import axios from "axios";

export const VideoPlayer = () => {
  const { token } = useAuth();
  const { dispatchplaylist } = usePlaylist();
  const { likeList, dispatchlike } = useLike();
  const { watchList, dispatchwatchlist } = useWatchList();
  const { history, loader, dispatchgeneral } = useGeneralContext();
  const { id } = useParams();
  const videoData = useVideoPlayer(id);
  const navigate = useNavigate();
  const [views, setviews] = useState(0);
  useEffect(() => {
    if (
      videoData &&
      history.some((item) => item?._id === videoData?._id) === false
    ) {
      token && addToHistory(videoData, dispatchgeneral, token);
    }
  }, [videoData, dispatchgeneral, history, token]);

  useEffect(() => {
    dispatchgeneral({ type: "ADD_VIEWS", payload: 0 });
  }, [dispatchgeneral]);

  const handleLikeHandler = (videoData) => {
    if (token) {
      if (likeList.some((item) => item._id === id)) {
        removeFromLikes(videoData._id, dispatchlike, token);
      } else {
        addToLikes(videoData, dispatchlike, token);
      }
    } else {
      navigate("/login");
    }
  };

  const handleWatchlistHandler = (videoData) => {
    if (token) {
      if (watchList.some((item) => item._id === id)) {
        removeFromWatchlist(videoData._id, dispatchwatchlist, token);
      } else {
        addToWatchlist(videoData, dispatchwatchlist, token);
      }
    } else {
      navigate("/login");
    }
  };

  const playlistModalHandler = () => {
    if (token) {
      dispatchplaylist({
        type: "SHOW_PLAYLIST_MODAL",
        payload: videoData,
      });
    } else {
      navigate("/login");
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

  const addViews = async (id, dispatchgeneral) => {
    try {
      const {
        status,
        data: { views },
      } = await axios.post("https://videoLibraryServer.joyan11.repl.co/views", {
        videoid: id,
      });
      if (status === 201) {
        setviews(views);
      }
    } catch (error) {
      console.log(error);
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
              onPlay={() => addViews(id, dispatchgeneral)}
              url={`https://www.youtube.com/watch?v=${id}`}
            />
          </div>
          <div className="video-heading">
            <p className=" text-m">{videoData.name}</p>
            <p className="views">
              {views === 0 ? videoData.views : views} Views
            </p>
          </div>
          <div className="video-wrapper">
            <div className="video-category">
              <p className="text-uppercase">#{videoData.category}</p>
            </div>
            <div className="player-btn-container">
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
                onClick={playlistModalHandler}>
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
