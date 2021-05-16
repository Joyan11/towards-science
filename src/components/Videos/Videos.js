import React from "react";
import "../../css/videos.css";
import { VideoCard } from "./VideoCard";
import { PlaylistModal } from "./PlaylistModal";
import { useGeneralContext } from "../../contexts/general-context";
import { CategoryBar } from "../Categories/CategoryBar";
import { useVideoData } from "../../hooks/useVideoData/useVideoData";
import { Puff } from "../Loader/Puff";
export function Videos() {
  useVideoData();
  const { videos, videoFilter, loader } = useGeneralContext();

  const filterByCategory = (videos, videofilter) => {
    if (videofilter === "all") {
      return videos;
    } else {
      return videos.filter((item) => item.category === videofilter);
    }
  };

  const filteredItems = filterByCategory(videos, videoFilter);

  return (
    <section className="video-section">
      <CategoryBar />
      <div className="video-page">
        {loader && <Puff />}
        {filteredItems.map((videos) => {
          return <VideoCard key={videos._id} videos={videos} />;
        })}
      </div>
      <PlaylistModal />
    </section>
  );
}
