import {
    ALL,
    COMPLETED,
} from '../utils/Const';

const DEFAULT_STATE = {
  statusForToggle: COMPLETED,
  currentFilter: ALL,
  nextId: 0,
  todos: []
}

export default DEFAULT_STATE
