import * as actionTypes from "./actions";

const initialState = {

  selectedArtistID: null,
  selectedAlbumID: null,
  selectedSongID: null,
  selectedPlaylistID: null,
  selectedProfileID: null,
  userID:1,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ARTIST:
      return {
        ...state,
        selectedArtistID : 0

      };
      break;

    case actionTypes.SELECT_ALBUM:
      return {
        ...state,
        selectedAlbumID : 0

      };
      break;

    case actionTypes.SELECT_SONG:
      return {
        ...state,
        selectedSongID : 0

      };
      break;

    case actionTypes.SELECT_PLAYLIST:
      return {
        ...state,
        selectedPlaylistID : 0

      };
      break;

    case actionTypes.SELECT_PROFILE:
      return {
        ...state,
        selectedProfileID : action.value

      };
      break;

    default:
      return state;
      break;
  }
};

export default reducer;