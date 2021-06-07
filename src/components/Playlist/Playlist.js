import React from "react";
import "../../css/playlist.css";
import { PlaylistContainer } from "./PlaylistContainer";
import { usePlaylist } from "../../contexts/playlist-context";
import { PageHeading } from "../PageHeading";
import { usePlaylistData } from "../../hooks/usePlaylistData/usePlaylistData";
import { Puff } from "../Loader/Puff";
import { useGeneralContext } from "../../contexts/general-context";
export function Playlist() {
  const { playList } = usePlaylist();
  const { loader } = useGeneralContext();
  usePlaylistData();
  return (
    <div className="playlist-section">
      <PageHeading name="Playlists" />
      <div className="playlist-wrapper">
        {loader && <Puff />}
        {playList.map((playlist) => {
          return <PlaylistContainer key={playlist._id} playlist={playlist} />;
        })}
      </div>
    </div>
  );
}
