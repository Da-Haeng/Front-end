import { useContext } from "react";
import MemoItem from "./MemoItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Main.css";
import { useEffect } from "react";
import { MemoDispatchContext, MemoStateContext } from "../App";
import React from "react";

const MemoList = () => {
  const memoData = useContext(MemoStateContext);
  const { onCreate }: any = useContext(MemoDispatchContext);

  useEffect(() => {}, [memoData]);
  return (
    <div className="main-memolist">
      {memoData &&
        memoData.map((it: any) => (
          <div key={it.id}>
            <MemoItem {...it} />
          </div>
        ))}
      <div className="main-memo" onClick={onCreate}>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>
    </div>
  );
};
export default React.memo(MemoList);
