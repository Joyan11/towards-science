import React from "react";
import "../../css/videos.css";
import { VideoCard } from "./VideoCard";
import { PlaylistModal } from "./PlaylistModal";
import { useGeneralContext } from "../../contexts/general-context";
import { CategoryBar } from "../Categories/CategoryBar";
export function Videos() {
  // console.log(showPlaylistModal);
  const { videos, videoFilter } = useGeneralContext();

  const filterByCategory = (videos, videofilter) => {
    if (videofilter === "all") {
      return videos;
    } else {
      return videos.filter((item) => item.category === videofilter);
    }
  };

  const filteredItems = filterByCategory(videos, videoFilter);
  console.log(filteredItems);
  return (
    <section className="video-section">
      <CategoryBar />
      <div className="video-page">
        {filteredItems.map((videos) => {
          return <VideoCard key={videos.id} videos={videos} />;
        })}
      </div>

      <PlaylistModal />
    </section>
  );
}
