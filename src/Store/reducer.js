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
  selectedGenreID: null,
  selectedGenreColor: null,
  playingSongID: null,
  playingPlaylistID: null,
  somethingIsPlaying:false,
  playOnRepeat:false,
  numberOfSongsPlayed:0,
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

      case actionTypes.SELECT_GENRE:
        return {
          ...state,
          selectedGenreID: action.value.id,
          selectedGenreColor: action.value.color
          };
        break;

        case actionTypes.PLAY_SONG:
          if((state.somethingIsPlaying)&&action.value===state.playingSongID)
          {
            return {
              ...state,
              playingSongID: action.value,
              somethingIsPlaying:false,
              };
          }
          else
          {
            return {
              ...state,
              playingSongID: action.value,
              somethingIsPlaying:true,
              };
          }
          
          break;

          case actionTypes.PLAY_PLAYLIST:
          if((state.somethingIsPlaying)&&action.value===state.playingPlaylistID)
          {
            return {
              ...state,
              playingPlaylistID: null,
              somethingIsPlaying:false,
              };
          }
          else
          {
            return {
              ...state,
              playingPlaylistID: action.value,
              somethingIsPlaying:true,
              };
          }
          
          break;

          case actionTypes.PLAY_PAUSE:
              if((state.somethingIsPlaying))
              {
                return {
                  ...state,
                  somethingIsPlaying:false,
                  };
              }
              else
              {
                return {
                  ...state,
                  somethingIsPlaying:true,
                  };
              }
  
            break;

            case actionTypes.TOGGLE_SONG_LOOP:

              if((state.playOnRepeat))
              {
                return {
                  ...state,
                  playOnRepeat:false,
                  };
              }
              else
              {
                return {
                  ...state,
                  playOnRepeat:true,
                  };
              }
              
  
            break;

            case actionTypes.INCREMENT_NUM_SONGS:
              return {
                ...state,
                numberOfSongsPlayed:(state.numberOfSongsPlayed+1)%5
                };

            break;
      
    default:
      return state;
      break;
  }
};

export default reducer;