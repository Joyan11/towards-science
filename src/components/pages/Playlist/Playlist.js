import React from "react";
import "../../../css/playlist.css";
import { PlaylistContainer } from "./PlaylistContainer";
import { usePlaylist } from "../../../contexts/playlist-context";

export function Playlist() {
  const { playList } = usePlaylist();
  console.log(playList);

  return (
    <div className="playlist-section">
      <div className="playlist-wrapper">
        {playList.map((playlist) => {
          return <PlaylistContainer key={playlist.id} playlist={playlist} />;
        })}
      </div>
    </div>
  );
}
