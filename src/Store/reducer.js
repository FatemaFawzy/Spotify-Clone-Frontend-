import * as actionTypes from "./actions";

const initialState = {

  selectedArtistID: null,
  selectedAlbumID: null,
  selectedSongID: null,
  selectedPlaylistID: null,
  selectedProfileID: null,
  userID: null,
  userToken: null,
  loggenIn: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECT_ARTIST:
      return {
        ...state,
        selectedArtistID: action.value

      };
      break;

    case actionTypes.SELECT_ALBUM:
      return {
        ...state,
        selectedAlbumID: action.value

      };
      break;

    case actionTypes.SELECT_SONG:
      return {
        ...state,
        selectedSongID: action.value

      };
      break;

    case actionTypes.SELECT_PLAYLIST:
      return {
        ...state,
        selectedPlaylistID: action.value

      };
      break;

    case actionTypes.SELECT_PROFILE:
      return {
        ...state,
        selectedProfileID: action.value

      };
      break;

    case actionTypes.ON_SIGNUP:
      console.log(action.payload.id);
      return {
        ...state,
        userID: action.payload.id,
        userToken: action.payload.token,
        loggenIn: true
      };
      break;
      
    case actionTypes.ON_SIGNIN:
      console.log(action.payload.id);
      return {
        ...state,
        userID: action.payload.id,
        userToken: action.payload.token,
        loggenIn: true
      };
      break;

    case actionTypes.ON_SIGNOUT:
      return {
        ...state,
        loggenIn: false,
        userID: null,
        userToken: null
        };
      break;
      
    default:
      return state;
      break;
  }
};

export default reducer;