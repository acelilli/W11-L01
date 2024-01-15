// src/store/store.js
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import dataReducer from "../reducers/index";

const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;
