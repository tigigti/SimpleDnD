import { createStore, combineReducers } from "redux";

import AppReducer from "./App/reducer";

const store = createStore(
    combineReducers({
        App: AppReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
