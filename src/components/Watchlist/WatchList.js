import React from "react";
import "../../css/video-list-section.css";
import { WatchCard } from "../Watchlist/WatchCard";
import { useWatchList } from "../../contexts/watchlist-context";
import { PageHeading } from "../PageHeading";
import { Puff } from "../Loader/Puff";
import { useGeneralContext } from "../../contexts/general-context";

export const WatchList = () => {
  const { watchList } = useWatchList();
  const { loader } = useGeneralContext();
  return (
    <div>
      <PageHeading name="Watchlist" />
      <div className="video-list-section">
        {loader && <Puff />}
        {watchList.map((watchlist) => (
          <WatchCard key={watchlist._id} watchlist={watchlist} />
        ))}
      </div>
    </div>
  );
};
