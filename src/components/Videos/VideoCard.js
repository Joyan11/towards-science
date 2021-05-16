import React from "react";
import { Link } from "react-router-dom";
import { thumbnail } from "../../utils/thumbnail";

export function VideoCard({ videos }) {
  const { _id, name, category } = videos;
  return (
    <div className="card card--verticle card--m video-card">
      <Link to={`/${_id}`} className="link">
        <figure className="card--image">
          <img src={thumbnail(_id)} alt="{name}" />
        </figure>
        <div className="card--body">
          <p className="card--title">{name}</p>
          <p className="card--text text-capitalize">#{category}</p>
        </div>
      </Link>
    </div>
  );
}
