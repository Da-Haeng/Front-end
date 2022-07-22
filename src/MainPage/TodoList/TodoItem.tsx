import { useContext } from "react";
import { TodoDispatchContext } from "./TodoTemplete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ id, todo, done }: any) => {
  const { onRemove, onDone, onNotDone }: any = useContext(TodoDispatchContext);

  const handleRemove = () => {
    onRemove(id);
  };
  const handleDone = () => {
    onDone(id);
  };
  const handleNotDone = () => {
    onNotDone(id);
  };
  

  return (
    <div className="TodoItem">
      {/* <div
        className="todo_btn"
        onClick={() => {
          alert("hi");
        }}
      >
        {done}
      </div> */}
      {done && <div
        className="todo_btn_done"
        onClick={handleNotDone}
      >
        <FontAwesomeIcon icon={faCheck} />
      </div>}
      {!done && <div
        className="todo_btn_notyet"
        onClick={handleDone}
      >
      </div>}
      {done && <div className="todo_done">{todo}</div>}
      {!done && <div className="todo_notyet">{todo}</div>}
      <div className="remove_btn" onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrash} className="trash-icon" />
      </div>
    </div>
  );
};
export default TodoItem;
