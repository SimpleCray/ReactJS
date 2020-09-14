const initialState = {
  items: []
};

const ADD_TODO = "ADD_TODO";
const SET_TODOS = "SET_TODOS";

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    userId: 99,
    id: 99,
    title: text,
    completed: false
  }
});

export const setTodos = (items) => ({
  type: SET_TODOS,
  payload: items
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case SET_TODOS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
