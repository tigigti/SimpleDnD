import React from "react";
import { Select, Option } from "../Forms";
import AbilityPoint from "./AbilityPoint";
import "./style.scss";

const CharacterCreator = props => {
    return (
        <div>
            <div className="grid row-lg">
                <div className="col input-field" style={{ flex: 4 }}>
                    <label>Character Name</label>
                    <input type="text" />
                </div>
                <div className="grid col" style={{ flex: 8 }}>
                    <div className="grid row-lg">
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
                    <div className="grid row-lg">
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

            {/* TODO: Play an animation when the button is clicked, calculate the values obviously. Refactor into multiple Components */}
            <div className="grid">
                <div className="col grid row-md">
                    <div className="col" style={{ flex: 2 }}>
                        <button className="btn-primary responsive" onClick={() => console.log("play animation")}>
                            Roll
                        </button>
                    </div>
                    <div className="col" style={{ flex: 10 }}>
                        <span className="cube">Roll</span>
                        <span className="cube">Roll</span>
                        <span className="cube">Roll</span>
                        <span className="cube">Roll</span>
                        <span className="cube">Roll</span>
                        <span className="cube">Roll</span>
                    </div>
                </div>
                <div className="col grid row-md">
                    <div className="col">
                        <AbilityPoint>Strength</AbilityPoint>
                    </div>
                    <div className="col">
                        <AbilityPoint>Dexterity</AbilityPoint>
                    </div>
                    <div className="col">
                        <AbilityPoint>Constitution</AbilityPoint>
                    </div>
                    <div className="col">
                        <AbilityPoint>Intelligence</AbilityPoint>
                    </div>
                    <div className="col">
                        <AbilityPoint>Wisdom</AbilityPoint>
                    </div>
                    <div className="col">
                        <AbilityPoint>Charisma</AbilityPoint>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCreator;
