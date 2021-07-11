/** @format */

import React from "react";
import "../../css/video-list-section.css";
import { LikedCard } from "./LikedCard";
import { useLike } from "../../contexts/like-context";
import { PageHeading } from "../PageHeading";
import { useGeneralContext } from "../../contexts/general-context";
import { Puff } from "../Loader/Puff";

export function LikedVideos() {
  const { loader } = useGeneralContext();
  const { likeList } = useLike();

  return (
    <div>
      <PageHeading name="Likes" />
      <div className="video-list-section">
        {loader && <Puff />}
        {likeList?.map((item) => (
          <LikedCard key={item._id} likelist={item} />
        ))}
      </div>
    </div>
  );
}
