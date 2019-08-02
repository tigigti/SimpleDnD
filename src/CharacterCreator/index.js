import React from "react";
import { connect } from "react-redux";
import { Select, Option } from "../Forms";
import Rolls from "./Rolls";
import "./style.scss";
import {
    getRolledPoints,
    rollPoints,
    assignValues,
    getAssignedValues,
    getModifier,
    setModifier,
    getCharacterName,
    getBackground,
    changeText,
    getPlayerName,
    getExp
} from "./state";

const CharacterCreator = ({
    rolledPoints,
    rollPoints,
    assignedValues,
    assignValues,
    setModifier,
    modifier,
    characterName,
    background,
    changeText,
    playerName,
    exp
}) => {
    const changedRace = value => {
        switch (value) {
            case "Human":
                setModifier([1, 1, 1, 1, 1, 1]);
                break;

            case "Dragonborn":
                setModifier([2, 0, 0, 0, 0, 1]);
                break;

            case "Dwarf":
                setModifier([0, 0, 2, 0, 0, 0]);
                break;

            case "Elf":
                setModifier([0, 2, 0, 0, 0, 0]);
                break;

            case "Gnome":
                setModifier([0, 0, 0, 2, 0, 0]);
                break;

            case "Half-Elf":
                setModifier([0, 1, 0, 1, 0, 2]);
                break;

            case "Halfling":
                setModifier([0, 2, 0, 0, 0, 0]);
                break;

            case "Half-Orc":
                setModifier([2, 0, 1, 0, 0, 0]);
                break;

            case "Tiefling":
                setModifier([0, 0, 0, 1, 0, 2]);
                break;

            default:
                setModifier([0, 0, 0, 0, 0, 0]);
        }
    };

    return (
        <div>
            <h1>Character Creator</h1>
            <div className="grid row-md">
                <div className="col input-field" style={{ flex: 4 }}>
                    <label>Character Name</label>
                    <input
                        value={characterName}
                        onChange={e => changeText("characterName", e.target.value)}
                        type="text"
                    />
                </div>
                <div className="grid col" style={{ flex: 8 }}>
                    <div className="grid row-md">
                        <div className="col">
                            <Select label="Class" onChange={value => changeText("class", value)}>
                                <Option value="Barbarian">Barbarian</Option>
                                <Option value="Bard">Bard</Option>
                                <Option value="Cleric">Cleric</Option>
                                <Option value="Druid">Druid</Option>
                                <Option value="Fighter">Fighter</Option>
                                <Option value="Monk">Monk</Option>
                                <Option value="Paladin">Paladin</Option>
                                <Option value="Ranger">Ranger</Option>
                                <Option value="Rogue">Rogue</Option>
                                <Option value="Sorcerer">Sorcerer</Option>
                                <Option value="Warlock">Warlock</Option>
                                <Option value="Wizard">Wizard</Option>
                            </Select>
                        </div>
                        <div className="col input-field">
                            <label>Background</label>
                            <input
                                value={background}
                                onChange={e => changeText("background", e.target.value)}
                                type="text"
                            />
                        </div>
                        <div className="col input-field">
                            <label>Player Name</label>
                            <input
                                value={playerName}
                                onChange={e => changeText("playerName", e.target.value)}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="grid row-md">
                        <div className="col">
                            <Select label="Race" onChange={value => changedRace(value)}>
                                <Option value="Human">Human</Option>
                                <Option value="Dragonborn">Dragonborn</Option>
                                <Option value="Dwarf">Dwarf</Option>
                                <Option value="Elf">Elf</Option>
                                <Option value="Gnome">Gnome</Option>
                                <Option value="Half-Elf">Half-Elf</Option>
                                <Option value="Halfling">Halfling</Option>
                                <Option value="Half-Orc">Half-Orc</Option>
                                <Option value="Tiefling">Tiefling</Option>
                            </Select>
                        </div>
                        <div className="col">
                            <Select label="Alignment" onChange={value => changeText("alignment", value)}>
                                <Option value="Lawful Good">Lawful Good</Option>
                                <Option value="Neutral Good">Neutral Good</Option>
                                <Option value="Chaotic Good">Chaotic Good</Option>
                                <Option value="Lawful Neutral">Lawful Neutral</Option>
                                <Option value="Neutral">Neutral</Option>
                                <Option value="Chaotic Neutral">Chaotic Neutral</Option>
                                <Option value="Lawful Evil">Lawful Evil</Option>
                                <Option value="Neutral Evil">Neutral Evil</Option>
                                <Option value="Chaotic Evil">Chaotic Evil</Option>
                            </Select>
                        </div>
                        <div className="col input-field">
                            <label>Exp</label>
                            <input value={exp} onChange={e => changeText("exp", e.target.value)} type="text" />
                        </div>
                    </div>
                </div>
            </div>
            <Rolls
                values={rolledPoints}
                roll={rollPoints}
                assignValues={assignValues}
                assignedValues={assignedValues}
                modifier={modifier}
            />
            <div className="grid">
                <span>Background Story</span>
                <textarea onChange={e => changeText("story", e.target.value)} rows={8} />
            </div>
        </div>
    );
};

const mapState = state => ({
    rolledPoints: getRolledPoints(state),
    assignedValues: getAssignedValues(state),
    modifier: getModifier(state),
    characterName: getCharacterName(state),
    background: getBackground(state),
    playerName: getPlayerName(state),
    exp: getExp(state)
});

const mapDispatch = {
    rollPoints,
    assignValues,
    setModifier,
    changeText
};

export default connect(
    mapState,
    mapDispatch
)(CharacterCreator);
