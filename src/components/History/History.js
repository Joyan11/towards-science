import React from "react";
import "../../css/history.css";
import { useGeneralContext } from "../../contexts/general-context";
import { HistoryCard } from "../History/HistoryCard";

export const History = () => {
  const { history } = useGeneralContext();
  return (
    <div className="history-section">
      {history.map((item) => (
        <HistoryCard history={item} />
      ))}
    </div>
  );
};
