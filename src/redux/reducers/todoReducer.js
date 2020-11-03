import { ADD_TODO, CHECK_TODO, REMOVE_TODO, UPDATE_TODO } from "../types/typesTodo"


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

export default todoReducer;