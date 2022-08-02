import React, { useRef, useState, useContext } from "react";
import { CategoryDispatchContext, CategoryStateContext } from "./DetailPage";

const Category = () => {
  const categoryData = useContext(CategoryStateContext);
  const { Create, Edit }: any = useContext(CategoryDispatchContext);
  const [Highlight, setHighlight] = useState(1);
  const dataId = useRef(4);

  const onHighlight = (id) => {
    setHighlight(id);
  };

  return (
    <div className="category">
      <div className="category_container">
        {categoryData &&
          categoryData.map((it: any) => (
            <span
              className={
                Highlight === it.id
                  ? "category_title_highlight"
                  : "category_title"
              }
              onClick={() => onHighlight(it.id)}
            >
              {it.categoryTitle}
            </span>
          ))}
        <span className="cateogory_create" onClick={Create}>
          + 카테고리 추가
        </span>
      </div>
      <div className="category_context"></div>
    </div>
  );
};

export default Category;
