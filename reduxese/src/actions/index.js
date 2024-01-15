// src/actions/index.js
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

/*request -> mostro il loader in attesa della risposta*/
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});
/*response ho i dati e li userò*/
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
/*gestione errore*/
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
