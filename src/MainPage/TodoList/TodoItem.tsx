const TodoItem = ({id, todo, done}: any) => {
    return (
        <div className="TodoItem">
            <div className="todo_btn" onClick={() => {alert('hi')}}>
               {done}
            </div>
            <div className="todo">
                {todo}
            </div>
            <div className="remove_btn">
                X
            </div>
        </div>
    )
}
export default TodoItem;