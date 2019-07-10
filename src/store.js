import { createStore, combineReducers } from "redux";

// Get all the State
import AppState from "./App/state";

// Create the root
const rootReducer = combineReducers({
    [AppState.name]: AppState.reducer
});

// Create the store
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
