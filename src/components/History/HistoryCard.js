import React from "react";
import { Link } from "react-router-dom";
import { removeFromHistory } from "../../api/history/removeFromHistory";
import { useAuth } from "../../contexts/auth-context";
import { useGeneralContext } from "../../contexts/general-context";
import { thumbnail } from "../../utils/thumbnail";

export const HistoryCard = ({ history }) => {
  const { dispatchgeneral } = useGeneralContext();
  const { token } = useAuth();
  const { _id, name, category } = history;

  return (
    <div className="card card--verticle card--l video-card">
      <figure className="card--image">
        <span onClick={() => removeFromHistory(_id, dispatchgeneral, token)}>
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
