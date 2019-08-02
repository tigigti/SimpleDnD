const name = "CharacterCreator";

// Constants
const ROLL_POINTS = `${name}/ROLL_POINTS`;
const ASSIGN_VALUES = `${name}/ASSIGN_VALUES`;
const SET_MODIFIER = `${name}/SET_MODIFIER`;
const CHANGE_TEXT = `${name}/CHANGE_TEXT`;

// Reducer
const initialState = {
    race: "Human",
    class: "Barbarian",
    background: "",
    characterName: "",
    playerName: "",
    alignment: "Lawful Good",
    exp: 0,
    rolledPoints: [15, 14, 13, 12, 10, 8],
    assignedValues: [0, 1, 2, 3, 4, 5],
    modifier: [1, 1, 1, 1, 1, 1],
    story: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ROLL_POINTS:
            return {
                ...state,
                rolledPoints: action.payload
            };

        case ASSIGN_VALUES:
            const temp = state.assignedValues[action.payload.abilityIndex];
            const index = state.assignedValues.findIndex(value => value === action.payload.diceIndex);

            return {
                ...state,
                assignedValues: state.assignedValues.map((value, i) => {
                    if (i === action.payload.abilityIndex) {
                        return action.payload.diceIndex;
                    }

                    if (i === index) {
                        return temp;
                    }

                    return value;
                })
            };

        case SET_MODIFIER:
            return {
                ...state,
                modifier: action.payload
            };

        case CHANGE_TEXT:
            let valueAsNumber = parseInt(action.payload.value);
            let finalValue = action.payload.value;
            if (action.payload.key === "exp") {
                finalValue = isNaN(valueAsNumber) ? 0 : valueAsNumber;
            }
            return {
                ...state,
                [action.payload.key]: finalValue
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

export const assignValues = (abilityIndex, diceIndex) => ({
    type: ASSIGN_VALUES,
    payload: {
        abilityIndex,
        diceIndex
    }
});

export const setModifier = payload => ({
    type: SET_MODIFIER,
    payload
});

export const changeText = (key, value) => ({
    type: CHANGE_TEXT,
    payload: {
        key,
        value
    }
});

// Selectors
export const getRace = state => state[name].race || initialState.race;
export const getClass = state => state[name].class || initialState.class;
export const getCharacterName = state => state[name].characterName || initialState.characterName;
export const getPlayerName = state => state[name].playerName || initialState.playerName;
export const getExp = state => state[name].exp || initialState.exp;
export const getBackground = state => state[name].background || initialState.background;
export const getRolledPoints = state => state[name].rolledPoints || initialState.rolledPoints;
export const getAssignedValues = state => state[name].assignedValues || initialState.assignedValues;
export const getModifier = state => state[name].modifier || initialState.modifier;
export const getStory = state => state[name].story || initialState.story;

export default {
    name,
    reducer
};
