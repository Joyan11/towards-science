import React from "react";
import "../../css/video-list-section.css";
import { useGeneralContext } from "../../contexts/general-context";
import { HistoryCard } from "../History/HistoryCard";
import { PageHeading } from "../PageHeading";
import { Puff } from "../Loader/Puff";

export const History = () => {
  const { history, loader } = useGeneralContext();
  return (
    <div>
      <PageHeading name="History" />
      <div className="video-list-section">
        {loader && <Puff />}
        {React.Children.toArray(
          history.map((item) => <HistoryCard history={item} />)
        )}
      </div>
    </div>
  );
};
