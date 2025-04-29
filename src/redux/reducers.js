import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, REMOVE_ALL_TODOS } from './actions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case REMOVE_ALL_TODOS:
      return [];
    default:
      return state;
  }
};

export default todoReducer;
