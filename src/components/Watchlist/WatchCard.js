import React from "react";
import { Link } from "react-router-dom";
import { removeFromWatchlist } from "../../api/watchlist/removeFromWatchlist";
import { useWatchList } from "../../contexts/watchlist-context";
import { thumbnail } from "../../utils/thumbnail";
import { toastMessages } from "../../utils/toastMessages";

export const WatchCard = ({ watchlist }) => {
  const { watchlistId, dispatchwatchlist } = useWatchList();
  const { _id, name, category } = watchlist;

  return (
    <div className="card card--verticle card--l video-card">
      <figure className="card--image">
        <span
          onClick={() =>
            removeFromWatchlist(watchlistId, _id, dispatchwatchlist)
          }>
          {" "}
          <ion-icon class="card--dismiss" name="close-circle"></ion-icon>
        </span>{" "}
        <Link to={`/${_id}`} className="link">
          <img src={thumbnail(_id)} alt={name} />
        </Link>
      </figure>
      <div className="card--body">
        <span clasNames="card--title">{name}</span>
        <p className="card--text text-capitalize">#{category} </p>
      </div>
    </div>
  );
};
