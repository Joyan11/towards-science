import React from "react";
import "../../css/category.css";
import { Categories } from "./Categories";
import { categories } from "../../data/data";
export const CategoryBar = () => {
  return (
    <div className="category-section">
      {categories.map((category) => (
        <Categories category={category} />
      ))}
    </div>
  );
};
