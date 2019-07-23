import React from "react";
import { connect } from "react-redux";
import { Select, Option } from "../Forms";
import Rolls from "./Rolls";
import "./style.scss";
import { getRolledPoints, rollPoints } from "./state";

const CharacterCreator = ({ rolledPoints, rollPoints }) => {
    return (
        <div>
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
                            <Select label="Race">
                                <Option value="human">Human</Option>
                                <Option value="elf">Elf</Option>
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
            <Rolls values={rolledPoints} roll={rollPoints} />
        </div>
    );
};

const mapState = state => ({
    rolledPoints: getRolledPoints(state)
});

const mapDispatch = {
    rollPoints
};

export default connect(
    mapState,
    mapDispatch
)(CharacterCreator);
