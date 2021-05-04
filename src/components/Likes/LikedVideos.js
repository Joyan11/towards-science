import React from "react";
import "../../css/likes.css";
import { LikedCard } from "./LikedCard";
import { useLike } from "../../contexts/like-context";
import { PageHeading } from "../PageHeading";
export function LikedVideos() {
  const { likeList } = useLike();
  return (
    <div>
      <PageHeading name="Likes" />
      <div className="likes-section">
        {likeList.map((item) => (
          <LikedCard likelist={item} />
        ))}
      </div>
    </div>
  );
}
