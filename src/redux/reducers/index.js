import { ADD_TO_PLAYER } from "../action";

const initialState = {
  currentSong: {}
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_PLAYER:
      return {
        ...state,
        currentSong: action.payload
      };

    default:
      return state;
  }
};

export default mainReducer;
