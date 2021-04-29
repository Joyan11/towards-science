import React from "react";
import { Link } from "react-router-dom";
import { useWatchList } from "../../contexts/watchlist-context";

export const WatchCard = ({ watchlist }) => {
  const { dispatchwatchlist } = useWatchList();
  const { id, name, category } = watchlist;
  return (
    <div className="watchlist-container">
      <div key={id} className="card card--verticle card--l video-card">
        <figure className="card--image">
          <span
            onClick={() =>
              dispatchwatchlist({
                type: "REMOVE_FROM_WATCHLIST",
                payload: id,
              })
            }>
            {" "}
            <ion-icon class="card--dismiss" name="close-circle"></ion-icon>
          </span>{" "}
          <Link to={`/${id}`} className="link">
            <img
              src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
              alt={name}
            />
          </Link>
        </figure>
        <div className="card--body">
          <span clasNames="card--title">{name}</span>
          <p className="card--text text-capitalize">#{category} </p>
        </div>
      </div>
    </div>
  );
};
