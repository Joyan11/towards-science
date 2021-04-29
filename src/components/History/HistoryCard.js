import React from "react";
import { Link } from "react-router-dom";
import { useGeneralContext } from "../../contexts/general-context";

export const HistoryCard = ({ history }) => {
  const { dispatchgeneral } = useGeneralContext();
  const { id, name, category } = history;
  return (
    <div className="history-container">
      <div key={id} className="card card--verticle card--l video-card">
        <figure className="card--image">
          <span
            onClick={() =>
              dispatchgeneral({
                type: "REMOVE_FROM_HISTORY",
                payload: id,
              })
            }>
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
