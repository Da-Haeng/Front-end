import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { CategoryStateContext } from "./DetailPage";

const CategoryContent = ({ categoryId }) => {
    const categoryData = useContext(CategoryStateContext);

    // useEffect(() => {
    //     console.log(categoryId);
    // }, [categoryId]);
    
    return (
    <div className="CategoryContent">
        {categoryId && <h2>{categoryId}</h2>}

    </div>
    )
}
export default React.memo(CategoryContent)