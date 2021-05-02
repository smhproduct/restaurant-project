import { createStore, applyMiddleware } from "redux";
import { Reducer } from "./reducer";
import logger from 'redux-logger';
import thunk from "redux-thunk";

const myStore = createStore(Reducer, applyMiddleware(logger, thunk));

export default myStore;

//thunk use korte middleware must lage, tai middleware install kore tar 2nd param hishebe thunk ke use korsi