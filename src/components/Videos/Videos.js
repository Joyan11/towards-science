import React from "react";
import "../../css/videos.css";
import { VideoCard } from "./VideoCard";
import { data } from "../../data/data";
import { PlaylistModal } from "./PlaylistModal";
export function Videos() {
  // console.log(showPlaylistModal);
  return (
    <section className="video-section">
      {data.map((videos) => {
        return <VideoCard key={videos.id} videos={videos} />;
      })}

      <PlaylistModal />
    </section>
  );
}
