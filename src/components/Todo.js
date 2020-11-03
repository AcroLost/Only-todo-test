import { connect } from 'react-redux';
import { checkTodoAC, removeTodoAC } from '../redux/actions/actionsTodo';

const Todo = ({ editMode, removeTodo, checkTodo, setTodoModal, setShowModal, todo }) => {

    const labelClass = editMode ? 'todo__text todo__edit' : 'todo__text';

    return (

        <div className="todo">
            <input type="checkbox" id={`todo-${todo.id}`}
                checked={todo.checked} onChange={() => checkTodo(todo.id)}
            />

            {editMode &&
                <svg className="todo__delete" onClick={() => removeTodo(todo.id)} width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H9C9.55229 0 10 0.447715 10 1C10 1.55228 9.55229 2 9 2H1C0.447715 2 0 1.55228 0 1Z" fill="white" />
                </svg>

            }

            <label className={labelClass} htmlFor={`todo-${todo.id}`}
                style={{ color: todo.checked ? 'rgba(0, 0, 0, 0.6)' : '#000', backgroundImage: editMode && 'none' }}
                onClick={() => {
                    if (editMode) {
                        setTodoModal(todo)
                        setShowModal(true)
                    }
                }}>
                {todo.label}
            </label>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo: (id) => dispatch(removeTodoAC(id)),
        checkTodo: (id) => dispatch(checkTodoAC(id)),
    }
}

export default connect(null, mapDispatchToProps)(Todo);
