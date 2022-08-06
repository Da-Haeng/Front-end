import React, {
  useRef,
  useState,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { CategoryDispatchContext, CategoryStateContext } from "./DetailPage";
import CategoryContent from "./CategoryContent";

const contentItem = [
  {
    mainId: 1,
    categoryId: 1,
    document: [
      {
        id: 1,
        text: "협재로 가서 숙소 체크인!",
        type: "h2",
        color: "black",
      },
    ],
  },
  {
    mainId: 2,
    categoryId: 1,
    document: [
      {
        id: 1,
        text: "일단 공항 근처에서 점심먹기 - 돼지국밥!",
        type: "h5",
        color: "blue",
      },
    ],
  },
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

export const ContentStateContext = React.createContext<[]>([]);
export const ContentDispatchContext = React.createContext<{}>({});

const Category = () => {
  const categoryData = useContext(CategoryStateContext);
  const { Create, Edit }: any = useContext(CategoryDispatchContext);
  const [Highlight, setHighlight] = useState(1);
  const dataId = useRef(4);
  const [memoId, setMemoId] = useState(1);

  const [contentData, dispatch] = useReducer(reducer, contentItem);

  useEffect(() => {
    
    if (contentData) {
      dispatch({ type: "INIT", data: contentData });
    }
  });

  const onHighlight = (id) => {
    setHighlight(id);
    setMemoId(id);
  };

  return (
    <ContentStateContext.Provider value={contentData}>
      <div className="category">
        <div className="category_container">
          {categoryData &&
            categoryData.map((it: any) => (
              <span
                key={it.id}
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
        <div className="category_context">
          {categoryData && (
            <div key={memoId}>
              <CategoryContent categoryId={memoId} />
            </div>
          )}
        </div>
      </div>
    </ContentStateContext.Provider>
  );
};

export default Category;
