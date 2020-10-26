import minus from '../images/delete.png';

const Todo = ({ editMode, removeTodo, checkTodo, setTodoModal, setShowModal, todo }) => {
    return (
        <div className="todo">
            {editMode
                ? <img className="todo__delete" src={minus} alt="delete" onClick={() => removeTodo(todo.id)} />
                : <input type="checkbox" id={`todo-${todo.id}`}
                    checked={todo.checked} onChange={() => checkTodo(todo.id)}
                />
            }

            <label className="todo__text" htmlFor={`todo-${todo.id}`}
                style={{ color: todo.checked ? 'rgba(0, 0, 0, 0.6)' : '#000' }}
                onClick={() => {
                    if (editMode) {
                        setTodoModal(todo)
                        setShowModal(true)
                    }
                }}><span></span>
                {todo.label}
            </label>
        </div>
    );
}

export default Todo;