import React from "react";
import "../../css/playlistmodal.css";
import { usePlaylist } from "../../contexts/playlist-context";
import { toastMessages } from "../../utils/toastMessages";
export const PlaylistModal = () => {
  const [text, setText] = React.useState("");
  const {
    playList,
    inputPlaylistBox,
    showPlaylistModal,
    dispatchplaylist,
  } = usePlaylist();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatchplaylist({ type: "DISPLAY_INPUT_BOX" });
      text !== "" &&
        dispatchplaylist({ type: "CREATE_PLAY_LIST", payload: text });
      setText("");
    }
  };

  const handleOnclick = () => {
    dispatchplaylist({ type: "DISPLAY_INPUT_BOX" });
    text !== "" &&
      dispatchplaylist({ type: "CREATE_PLAY_LIST", payload: text });
    setText("");
  };

  const handlePlaylistCheckbox = (e) => {
    if (e.target.checked === true) {
      dispatchplaylist({
        type: "SAVE_TO_PLAYLIST",
        playlistId: e.target.id,
        videoData: showPlaylistModal.videoData,
      });
      toastMessages("Video Added to Playlist");
    } else {
      dispatchplaylist({
        type: "REMOVE_FROM_PLAYLIST",
        playlistId: e.target.id,
        videoData: showPlaylistModal.videoData.id,
      });
      toastMessages("Video Removed from Playlist");
    }
    console.log(
      playList
        .filter((item) => item.id === e.target.id)[0]
        .list.some((item) => {
          return item.id === showPlaylistModal.videoData.id ? true : false;
        })
    );
  };

  const itemChecked = (id) => {
    return playList
      .filter((item) => item.id === id)[0]
      .list.some((item) => {
        return item.id === showPlaylistModal.videoData.id ? true : false;
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
                <div key={item.id} className="playlist-names">
                  <input
                    type="checkbox"
                    name="playlist-item"
                    className="playlist-checkbox"
                    id={item.id}
                    checked={itemChecked(item.id)}
                    onChange={(e) => handlePlaylistCheckbox(e)}
                  />
                  <label htmlFor={item.id}>{item.name}</label>
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
