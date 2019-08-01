import React from "react";
import { connect } from "react-redux";
import { Select, Option } from "../Forms";
import Rolls from "./Rolls";
import "./style.scss";
import { getRolledPoints, rollPoints, assignValues, getAssignedValues, getModifier, setModifier } from "./state";

const CharacterCreator = ({ rolledPoints, rollPoints, assignedValues, assignValues, setModifier, modifier }) => {
    const changedRace = value => {
        switch (value) {
            case "human":
                setModifier([1, 1, 1, 1, 1, 1]);
        }
    };

    return (
        <div>
            <h1>Character Creator</h1>
            <div className="grid row-md">
                <div className="col input-field" style={{ flex: 4 }}>
                    <label>Character Name</label>
                    <input type="text" />
                </div>
                <div className="grid col" style={{ flex: 8 }}>
                    <div className="grid row-md">
                        <div className="col">
                            <Select label="Class" onChange={value => console.log(value)}>
                                <Option value="one">One</Option>
                                <Option value="two">Two</Option>
                                <Option value="three">Three</Option>
                                <Option value="four">Four</Option>
                            </Select>
                        </div>
                        <div className="col input-field">
                            <label>Background</label>
                            <input type="text" />
                        </div>
                        <div className="col input-field">
                            <label>Player Name</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="grid row-md">
                        <div className="col">
                            <Select label="Race" onChange={value => changedRace(value)}>
                                <Option value="human">Human</Option>
                                <Option value="dragonborn">Dragonborn</Option>
                                <Option value="dwarf">Dwarf</Option>
                                <Option value="elf">Elf</Option>
                                <Option value="gnome">Gnome</Option>
                                <Option value="halfelf">Half-Elf</Option>
                                <Option value="halfling">Halfling</Option>
                                <Option value="halforc">Half-Orc</Option>
                                <Option value="tiefling">Tiefling</Option>
                            </Select>
                        </div>
                        <div className="col">
                            <Select label="Alignment">
                                <Option value="good">Good</Option>
                                <Option value="evil">Evil</Option>
                            </Select>
                        </div>
                        <div className="col input-field">
                            <label>Exp</label>
                            <input type="text" />
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
        </div>
    );
};

const mapState = state => ({
    rolledPoints: getRolledPoints(state),
    assignedValues: getAssignedValues(state),
    modifier: getModifier(state)
});

const mapDispatch = {
    rollPoints,
    assignValues,
    setModifier
};

export default connect(
    mapState,
    mapDispatch
)(CharacterCreator);
