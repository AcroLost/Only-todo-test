const ADD_TODO = 'todo/ADD_TODO',
  REMOVE_TODO = 'todo/REMOVE_TODO',
  UPDATE_TODO = 'todo/UPDATE_TODO',
  CHECK_TODO = 'todo/CHECK_TODO';

const initialState = {
  todos: [
    { id: 1, label: 'todo1', checked: false },
    { id: 2, label: 'todo2', checked: true },
    { id: 3, label: 'todo3', checked: false },
  ]
}

const todoReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: new Date().valueOf(),
        label: action.label,
        checked: false
      }

      return {
        ...state,
        todos: [...state.todos, newTodo]
      }

    case REMOVE_TODO:

      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.todoId)
      }

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {

          if (item.id === action.todoId) {
            return { ...item, label: action.label }
          }
          return item
        })
      }

    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => {

          if (item.id === action.todoId) {
            return { ...item, checked: !item.checked }
          }
          return item
        })
      }

    default:
      return state;

  }
}

export const addTodoAC = (label) => {
  return { type: ADD_TODO, label }
}

export const removeTodoAC = (todoId) => {
  return { type: REMOVE_TODO, todoId }
}

export const updateTodoAC = (todoId, label) => {
  return { type: UPDATE_TODO, todoId, label }
}

export const checkTodoAC = (todoId) => {
  return { type: CHECK_TODO, todoId }
}

export default todoReducer;