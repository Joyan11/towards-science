import React from "react";
import { Link } from "react-router-dom";

export function VideoCard({ videos }) {
  const { id, name, category } = videos;
  return (
    <div className="videocard-container">
      <div className="card card--verticle card--m video-card">
        <Link to={`/${id}`} className="link">
          <figure className="card--image">
            <img
              src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
              alt="{name}"
            />
          </figure>
          <div className="card--body">
            <p className="card--title">{name}</p>
            <p className="card--text text-capitalize">#{category}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
