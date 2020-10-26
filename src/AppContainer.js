import App from './App';
import { connect } from 'react-redux';
import { addTodoAC, checkTodoAC, removeTodoAC, updateTodoAC } from './redux/todoReducer';

const AppContainer = (props) => {
    return <App {...props} />
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (text) => dispatch(addTodoAC(text)),
        removeTodo: (id) => dispatch(removeTodoAC(id)),
        updateTodo: (id, text) => dispatch(updateTodoAC(id, text)),
        checkTodo: (id) => dispatch(checkTodoAC(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);