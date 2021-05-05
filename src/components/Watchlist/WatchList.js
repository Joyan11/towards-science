import React from "react";
import "../../css/video-list-section.css";
import { WatchCard } from "../Watchlist/WatchCard";
import { useWatchList } from "../../contexts/watchlist-context";
import { PageHeading } from "../PageHeading";

export const WatchList = () => {
  const { watchList } = useWatchList();

  return (
    <div>
      <PageHeading name="Watch List" />
      <div className="video-list-section">
        {watchList.map((watchlist) => (
          <WatchCard watchlist={watchlist} />
        ))}
      </div>
    </div>
  );
};
