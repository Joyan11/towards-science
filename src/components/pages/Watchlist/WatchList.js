import React from "react";
import "../../../css/wishlist.css";
import { WatchCard } from "../Watchlist/WatchCard";
import { useWatchList } from "../../../contexts/watchlist-context";

export const WatchList = () => {
  const { watchList } = useWatchList();

  return (
    <div className="watchlist-section">
      {watchList.map((watchlist) => (
        <WatchCard watchlist={watchlist} />
      ))}
    </div>
  );
};
