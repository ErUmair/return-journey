import { createStore, combineReducers } from "redux";

import counter from './_reducers/counter';

const reducers = combineReducers({ counter });

export default createStore(reducers);