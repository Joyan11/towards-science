import React from "react";
import "../../css/video-list-section.css";
import { useGeneralContext } from "../../contexts/general-context";
import { HistoryCard } from "../History/HistoryCard";
import { PageHeading } from "../PageHeading";
import { useHistoryData } from "../../hooks/useHistoryData.js/useHistoryData";
import { Puff } from "../Loader/Puff";

export const History = () => {
  const { history, loader } = useGeneralContext();
  useHistoryData();
  return (
    <div>
      <PageHeading name="History" />
      <div className="video-list-section">
        {loader && <Puff />}
        {history.map((item) => (
          <HistoryCard jey={item._id} history={item} />
        ))}
      </div>
    </div>
  );
};
