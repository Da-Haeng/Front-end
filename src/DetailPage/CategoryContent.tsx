import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { ContentStateContext } from "./Category";
import { CategoryStateContext } from "./DetailPage";

const CategoryContent = ({ categoryId }) => {
    const categoryData = useContext(CategoryStateContext);
    const contentList = useContext(ContentStateContext);
    const [content, setContent] = useState(null);
    const [memoId, setMemoId] = useState();

    useEffect(() => {
        console.log(categoryData);
        console.log(contentList);

        // if (contentList.length >= 1) {
        //     const targetContent = contentList.find(
        //         (it: any) => parseInt(it.id) === parseInt(categoryData.id)
        //     );
        //     if(targetContent) {
        //         setContent(targetContent);
        //         console.log(content);
        //     } else {
        //         // alert("존재하지 않는 메모입니다.");
        //     }
        // }
    }, []);
    
    return (
    <div className="CategoryContent">
        {categoryId && <h2>{categoryId}</h2>}
        

    </div>
    )
}
export default React.memo(CategoryContent)