import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MemoStateContext } from "../App";
import SideBar from "../CommonPage/SideBar/SideBar";
import DetailHeader from "./DetailHeader";
import './DetailPage.css';
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
        alert("존재하지 않는 메모입니다.");
        navigate("/", { replace: true });
      }
    } else {
      alert("존재하지 않는 메모입니다.");
      navigate("/", { replace: true });
    }
  }, []);

  return (
  <div className="DetailPage">
    <div className="side-memu">
    <SideBar />
    </div>
    <div className="memo-container">
      <div className="memo-header">
      {data && <DetailHeader title={data.title}/>}
      </div>
      <div className="memo-content">
      {data &&
       <h1>{data.title}</h1>}
      {data &&
       <span>{data.date}</span>}
      </div>
    </div>

  </div>);
};

export default React.memo(DetailPage);
