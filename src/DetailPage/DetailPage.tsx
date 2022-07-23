import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MemoStateContext } from "../MainPage/Main";

const DetailPage = () => {
  const { id } = useParams();
  const memoList = useContext(MemoStateContext);
  console.log(memoList);
  const [data, setData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(memoList);
    if (memoList.length >= 1) {
      const targetMemo = memoList.find(
        (it: any) => parseInt(it.id) === parseInt(id)
      );
      console.log(targetMemo);
      if (memoList) {
        setData(targetMemo);
      } else {
        alert("메모장이 없습니다.");
        navigate("/", { replace: true });
      }
    } else {
      alert("XX");
    }
  }, [id, memoList]);

  return <div></div>;
};

export default DetailPage;
