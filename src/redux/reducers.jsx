// src/redux/reducers.js
const initialState = {
    selectedPokemon: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SELECTED_POKEMON':
        return {
          ...state,
          selectedPokemon: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  