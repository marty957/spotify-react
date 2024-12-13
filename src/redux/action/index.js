export const ADD_TO_PLAYER = "ADD_TO_PLAYER";
export const ADD_TO_FAV = "ADD_TO_FAV";

export const addToThePlayer = (song) => ({
  type: ADD_TO_PLAYER,
  payload: song.album
});

export const addToFav = (song) => ({
  type: ADD_TO_FAV,
  payload: song
});
