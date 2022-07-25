import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MemoStateContext } from "../App";

interface IMemoItem {
  id: number;
  title: string;
  date: string;
  description: string;
  color: number;
}

const DetailPage = () => {
  const { id } = useParams();
  const memoList = useContext(MemoStateContext);
  const [data, setData] = useState<IMemoItem>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (memoList.length >= 1) {
      const targetMemo = memoList.find(
        (it: any) => parseInt(it.id) === parseInt(id)
      );
      if (targetMemo) {
        setData(targetMemo);
      } else {
        alert("존재하지 않는 메모입니다");
        navigate("/", { replace: true });
      }
    } else {
      alert("존재하지 않는 메모입니다");
      navigate("/", { replace: true });
    }
  }, [id, memoList]);

  if (!data) {
    return <div>Loading Now...</div>;
  } else {
    return (
      <div>
        {Object.keys(data).map((key) => (
          <div key={key}>
            {key} : {data[key]}
          </div>
        ))}
      </div>
    );
  }
};

export default DetailPage;
