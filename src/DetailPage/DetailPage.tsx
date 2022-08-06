import React, { useContext, useEffect, useState, useReducer } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MemoStateContext } from "../App";
import SideBar from "../CommonPage/SideBar/SideBar";
import DetailHeader from "./DetailHeader";
import Category from "./Category";
import "./DetailPage.css";

interface IMemoItem {
  id: number;
  title: string;
  date: string;
  description: string;
  color: number;
}

export type category = {
  mainId: number;
  id: number;
  categoryTitle: string;
};

const categoryItem = [
  { mainId: 1, id: 1, categoryTitle: "DAY1" },
  { mainId: 1, id: 2, categoryTitle: "DAY2" },
  { mainId: 1, id: 3, categoryTitle: "DAY3" },
  //데이터 불러올 때 params id랑 category id 같은거만 불러오기
];



const reducer = (state: any, action: any) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [...state, action.data];
      break;
    }
    case "EDIT": {
      newState = state.map((it) => {
        return it.id === action.data.id ? { ...action.data } : it;
      });
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const CategoryStateContext = React.createContext<[]>([]);
export const CategoryDispatchContext = React.createContext<{}>({});

const DetailPage = () => {
  const { id } = useParams();
  const memoList = useContext(MemoStateContext);
  const [data, setData] = useState<IMemoItem>(null);
  const navigate = useNavigate();

  const [categoryData, dispatch] = useReducer(reducer, categoryItem);

  useEffect(() => {
    if (categoryData) {
      dispatch({ type: "INIT", data: categoryData });
    }
  }, [categoryData]);

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

  const Create = () => {
    dispatch({
      type: "CREATE",
      data: {
        mainId: id,
        id: 4,
        categoryTitle: "카테고리명",
      },
    });
    // dataId.current += 1;
  };

  const Edit = (targetId, categoryTitle) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        categoryTitle,
      },
    });
  };

  return (
    <CategoryStateContext.Provider value={categoryData}>
      <CategoryDispatchContext.Provider value={{ Create, Edit }}>
        <div className="DetailPage">
          <div className="side-memu">
            <SideBar />
          </div>
          <div className="memo-container">
            <div className="memo-header">
              {data && <DetailHeader title={data.title} />}
            </div>
            <div className="memo-content">
              {data && <h1>{data.title}</h1>}
              {data && <span>{data.date}</span>}
            </div>
            <div className="memo-category">
              <Category />
            </div>
          </div>
        </div>
      </CategoryDispatchContext.Provider>
    </CategoryStateContext.Provider>
  );
};

export default React.memo(DetailPage);
