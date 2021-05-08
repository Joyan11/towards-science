import React from "react";
import { Link } from "react-router-dom";
import { useWatchList } from "../../contexts/watchlist-context";
import { thumbnail } from "../../utils/thumbnail";
import { toastMessages } from "../../utils/toastMessages";

export const WatchCard = ({ watchlist }) => {
  const { dispatchwatchlist } = useWatchList();
  const { id, name, category } = watchlist;

  const deleteFromWatchlist = (id) => {
    dispatchwatchlist({
      type: "REMOVE_FROM_WATCHLIST",
      payload: id,
    });
    toastMessages("Video removed from Watch List");
  };
  return (
    <div key={id} className="card card--verticle card--l video-card">
      <figure className="card--image">
        <span onClick={() => dispatchwatchlist(id)}>
          {" "}
          <ion-icon class="card--dismiss" name="close-circle"></ion-icon>
        </span>{" "}
        <Link to={`/${id}`} className="link">
          <img src={thumbnail(id)} alt={name} />
        </Link>
      </figure>
      <div className="card--body">
        <span clasNames="card--title">{name}</span>
        <p className="card--text text-capitalize">#{category} </p>
      </div>
    </div>
  );
};
