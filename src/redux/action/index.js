export const ADD_TO_PLAYER = "ADD_TO_PLAYER";

export const addToThePlayer = (song) => ({
  type: ADD_TO_PLAYER,
  payload: song.album
});
