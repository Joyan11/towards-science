import React from "react";
import "../../css/history.css";
import { useGeneralContext } from "../../contexts/general-context";
import { HistoryCard } from "../History/HistoryCard";
import { PageHeading } from "../PageHeading";

export const History = () => {
  const { history } = useGeneralContext();
  return (
    <div>
      <PageHeading name="History" />
      <div className="history-section">
        {history.map((item) => (
          <HistoryCard history={item} />
        ))}
      </div>
    </div>
  );
};
