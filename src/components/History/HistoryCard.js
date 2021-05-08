import React from "react";
import { Link } from "react-router-dom";
import { useGeneralContext } from "../../contexts/general-context";
import { thumbnail } from "../../utils/thumbnail";
import { toastMessages } from "../../utils/toastMessages";

export const HistoryCard = ({ history }) => {
  const { dispatchgeneral } = useGeneralContext();
  const { id, name, category } = history;

  const deleteFromHistory = (id) => {
    dispatchgeneral({
      type: "REMOVE_FROM_HISTORY",
      payload: id,
    });
    toastMessages("Video Removed From History");
  };
  return (
    <div key={id} className="card card--verticle card--l video-card">
      <figure className="card--image">
        <span onClick={() => deleteFromHistory(id)}>
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
