import {
    ACTIVE,
    COMPLETED,
} from '../utils/Const';

const toggleAll = (state, action) => {
  const todos = state.todos.map( todo =>
    Object.assign( {}, todo, { status: state.statusForToggle })
  )
  const statusForToggle = state.statusForToggle === COMPLETED ? ACTIVE : COMPLETED

  return Object.assign( {}, state, { todos, statusForToggle })
}

export default toggleAll
