import "./Todo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const TodoHeader = () => {
    return (
        <div className="TodoHeader">
                <div className="head_btn_left">
                    {/* <button>추가</button> */}
                </div>
                <div className="head_text">

                </div>
                <div className="head_btn_right">
                    <FontAwesomeIcon icon={faXmark}/>
                </div>
        </div>
    )
}
export default TodoHeader;