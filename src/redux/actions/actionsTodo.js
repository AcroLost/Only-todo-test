import { ADD_TODO, CHECK_TODO, REMOVE_TODO, UPDATE_TODO } from "../types/typesTodo"

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