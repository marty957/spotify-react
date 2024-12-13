import { ADD_TO_FAV, ADD_TO_PLAYER } from "../action";

const initialState = {
  currentSong: {},
  content: []
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        currentSong: action.payload
      };
    case ADD_TO_FAV:
      return {
        ...state,
        content: [...state.content, action.payload]
      };

    default:
      return state;
  }
};

export default mainReducer;
