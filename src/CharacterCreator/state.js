const name = "CharacterCreator";

// Constants
const ROLL_POINTS = `${name}/ROLL_POINTS`;

// Reducer
const initialState = {
    rolledPoints: [15, 14, 13, 12, 10, 8]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ROLL_POINTS:
            return {
                ...state,
                rolledPoints: action.payload
            };

        default:
            return state;
    }
};

// Action Creator
export const rollPoints = payload => ({
    type: ROLL_POINTS,
    payload
});

// Selectors
export const getRace = state => state[name].race || initialState.race;
export const getRolledPoints = state => state[name].rolledPoints || initialState.rolledPoints;

export default {
    name,
    reducer
};
