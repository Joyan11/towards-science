import React from "react";
import "../../../css/likes.css";
import { LikedCard } from "./LikedCard";
import { useLike } from "../../../contexts/like-context";
export function LikedVideos() {
  const { likeList } = useLike();
  return (
    <div className="likes-section">
      {likeList.map((item) => (
        <LikedCard likelist={item} />
      ))}
    </div>
  );
}
