import React from "react";
import { Link } from "react-router-dom";
import { useLike } from "../../contexts/like-context";
import { toastMessages } from "../../utils/toastMessages";

export const LikedCard = ({ likelist }) => {
  const { dispatchlike } = useLike();
  const { id, name, category } = likelist;

  const deleteFromLikelist = (id) => {
    dispatchlike({
      type: "REMOVE_FROM_LIKED",
      payload: id,
    });
    toastMessages("Video Removed from Likes");
  };

  return (
    <div key={id} className="card card--verticle card--l video-card">
      <figure className="card--image">
        <span onClick={() => deleteFromLikelist(id)}>
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
  );
};
