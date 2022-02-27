import {
    ACTIVE,
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO,
    CHANGE_FILTER,
    EDIT_TITLE,
    CLEAR_COMPLETED,
    TOGGLE_ALL,
} from '../utils/Const';

const addTodo = (title, status) => ({
    type: ADD_TODO,
    title,
    status: status || ACTIVE
})

const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

const deleteTodo = id => ({
    type: DELETE_TODO,
    id
})

const changeFilter = filter => ({
    type: CHANGE_FILTER,
    filter
})

const editTitle = (id, title) => ({
    type: EDIT_TITLE,
    id,
    title
})

const clearCompleted = () => ({
    type: CLEAR_COMPLETED
})

const toggleAll = status => ({
    type: TOGGLE_ALL,
    status
})

export { addTodo, toggleTodo, deleteTodo, changeFilter, editTitle, clearCompleted, toggleAll }

