import React from "react";
import { useGeneralContext } from "../../contexts/general-context";
export const Categories = ({ category }) => {
  const { videoFilter, dispatchgeneral } = useGeneralContext();
  return (
    <a
      className={`btn btn--round btn-outline-default filter-button ${
        videoFilter === category && `active`
      }`}
      onClick={() =>
        dispatchgeneral({ type: "VIDEO_FILTER", payload: category })
      }>
      {" "}
      {category}
    </a>
  );
};
