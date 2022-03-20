import { combineReducers } from "redux";

import apiListReducer from './apiListReducer';
import rotateReducer from './rotateReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
    apiListReducer: apiListReducer,
    rotateReducer: rotateReducer,
    searchReducer : searchReducer,
});

export default rootReducer;