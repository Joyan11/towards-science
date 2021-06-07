import React from "react";
import "../../css/playlistmodal.css";
import { usePlaylist } from "../../contexts/playlist-context";
import { createPlaylist } from "../../api/playlist/createPlaylist";
import { addToPlaylist } from "../../api/playlist/addToPlaylist";
import { removeFromPlaylist } from "../../api/playlist/removeFromPlaylist";
import { useAuth } from "../../contexts/auth-context";

export const PlaylistModal = () => {
  const [text, setText] = React.useState("");
  const { playList, inputPlaylistBox, showPlaylistModal, dispatchplaylist } =
    usePlaylist();

  const { token } = useAuth();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleOnclick();
    }
  };

  const handleOnclick = () => {
    dispatchplaylist({ type: "DISPLAY_INPUT_BOX" });
    text !== "" && createPlaylist(dispatchplaylist, text, token);
    setText("");
  };

  const handlePlaylistCheckbox = (e, token) => {
    let listId = e.target.id;
    if (e.target.checked === true) {
      let videoData = showPlaylistModal.videoData;
      addToPlaylist(listId, dispatchplaylist, videoData, token);
    } else {
      let videoId = showPlaylistModal.videoData._id;
      removeFromPlaylist(listId, videoId, dispatchplaylist, token);
    }
  };

  const itemChecked = (id) => {
    return playList
      .filter((item) => item._id === id)[0]
      .list.some((item) => {
        return item._id === showPlaylistModal.videoData._id ? true : false;
      });
  };

  return (
    <>
      <div
        className={`modal ${
          showPlaylistModal.status === false ? "modal-hide" : "modal-show"
        }`}>
        <div className="modal--window">
          <h1 className="modal--title">Playlist</h1>
          <span
            onClick={() => dispatchplaylist({ type: "SHOW_PLAYLIST_MODAL" })}>
            <ion-icon name="close-outline" class="modal--icon"></ion-icon>
          </span>

          <div className="modal--content">
            {inputPlaylistBox && (
              <div className="modal--input">
                <input
                  type="text"
                  placeholder="Enter Playlist Name"
                  className="modal--input-box"
                  onChange={(event) => setText(event.target.value)}
                  onKeyPress={(event) => handleKeyPress(event)}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={handleOnclick}>
                  Create
                </button>
              </div>
            )}
            {playList.map((item) => {
              return (
                <div key={item._id} className="playlist-names">
                  <input
                    type="checkbox"
                    name="playlist-item"
                    className="playlist-checkbox"
                    id={item._id}
                    checked={itemChecked(item._id)}
                    onChange={(e) => handlePlaylistCheckbox(e, token)}
                  />

                  <label htmlFor={item._id}>{item.name}</label>
                </div>
              );
            })}
          </div>
          <div className="modal--buttons">
            <button
              className="btn btn-secondary"
              onClick={() => dispatchplaylist({ type: "DISPLAY_INPUT_BOX" })}>
              New
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
