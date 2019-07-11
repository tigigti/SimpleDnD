import { createStore, combineReducers } from "redux";

// Get all the State
import AppState from "./App/state";
import CCState from "./CharacterCreator/state";

// Create the root
const rootReducer = combineReducers({
    [AppState.name]: AppState.reducer,
    [CCState.name]: CCState.reducer
});

// Create the store
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
