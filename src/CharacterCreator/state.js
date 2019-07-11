const name = "CharacterCreator";

// Constants
const ACTION = `${name}/ACTION`;

// Reducer
const initialState = {
    race: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION:
            return state;

        default:
            return state;
    }
};

// Action Creator
export const action = payload => ({
    type: ACTION
});

// Selectors
export const getRace = state => state[name].race || initialState.race;

export default {
    name,
    reducer
};
