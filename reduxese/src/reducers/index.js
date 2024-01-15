// src/reducers/index.js
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "../actions/index";

const initialState = {
  data: [],
  loading: false,
  error: null,
  query: "",
};

/*definizione iniziale data è un array vuoto, loading è un booleano a false, error è un oggetto a valore null*/
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    /*avvio richiesta lo state resta immutato ma loading è messo a true*/
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    /*fine ricezione risposta loading false e metto i dati nell'array*/
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    /*errore loading è ancora false, dati vuoti, oggetto errore valorizzato*/
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case "SET_QUERY":
      return {
        ...state,
        query: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
