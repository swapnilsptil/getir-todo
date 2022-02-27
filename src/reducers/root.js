import {
    EDIT_TITLE,
    CLEAR_COMPLETED,
    TOGGLE_ALL,
    CHANGE_FILTER,
    DELETE_TODO, 
    TOGGLE_TODO, 
    ADD_TODO, 
} from '../utils/Const';

import addTodo from './addTodo'
import toggleTodo from './toggleTodo'
import deleteTodo from './deleteTodo'
import changeFilter from './changeFilter'
import editTitle from './editTitle'
import clearCompleted from './clearCompleted'
import toggleAll from './toggleAll'

const root = (state, action) => {

  switch( action.type ) {
    case ADD_TODO:
      return addTodo( state, action )
    case TOGGLE_TODO:
      return toggleTodo( state, action )
    case DELETE_TODO:
      return deleteTodo( state, action )
    case CHANGE_FILTER:
      return changeFilter( state, action )
    case EDIT_TITLE:
      return editTitle( state, action )
    case CLEAR_COMPLETED:
      return clearCompleted( state, action )
    case TOGGLE_ALL:
      return toggleAll( state, action )
    default:
      return state
  }
}

export default root
