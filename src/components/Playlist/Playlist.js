import React from "react";
import "../../css/playlist.css";
import { PlaylistContainer } from "./PlaylistContainer";
import { usePlaylist } from "../../contexts/playlist-context";
import { PageHeading } from "../PageHeading";
export function Playlist() {
  const { playList } = usePlaylist();
  console.log(playList);

  return (
    <div className="playlist-section">
      <PageHeading name="Playlists" />
      <div className="playlist-wrapper">
        {playList.map((playlist) => {
          return <PlaylistContainer key={playlist.id} playlist={playlist} />;
        })}
      </div>
    </div>
  );
}
