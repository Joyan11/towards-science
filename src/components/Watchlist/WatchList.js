import React from "react";
import "../../css/wishlist.css";
import { WatchCard } from "../Watchlist/WatchCard";
import { useWatchList } from "../../contexts/watchlist-context";
import { PageHeading } from "../PageHeading";

export const WatchList = () => {
  const { watchList } = useWatchList();

  return (
    <div>
      <PageHeading name="Watch List" />
      <div className="watchlist-section">
        {watchList.map((watchlist) => (
          <WatchCard watchlist={watchlist} />
        ))}
      </div>
    </div>
  );
};
