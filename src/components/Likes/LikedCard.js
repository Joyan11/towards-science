import React from "react";
import { Link } from "react-router-dom";
import { removeFromLikes } from "../../api/likes/removeFromLikes";
import { useAuth } from "../../contexts/auth-context";
import { useLike } from "../../contexts/like-context";
import { thumbnail } from "../../utils/thumbnail";

export const LikedCard = ({ likelist }) => {
  const { dispatchlike } = useLike();
  const { _id, name, category } = likelist;
  const { token } = useAuth();

  return (
    <div className="card card--verticle card--l video-card">
      <figure className="card--image">
        <span onClick={() => removeFromLikes(_id, dispatchlike, token)}>
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
