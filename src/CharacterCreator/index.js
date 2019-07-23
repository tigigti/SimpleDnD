import React from "react";
import { Select, Option } from "../Forms";

const CharacterCreator = props => {
    return (
        <div className="grid row-lg">
            <div className="col" style={{ flex: 4 }}>
                Character Name
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
                    <div className="col">Background</div>
                    <div className="col">Player Name</div>
                </div>
                <div className="grid row-lg">
                    <div className="col">
                        <Select label="Race">
                            <Option value="human">Human</Option>
                            <Option value="elf">Elf</Option>
                        </Select>
                    </div>
                    <div className="col">Alignment</div>
                    <div className="col">Exp</div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCreator;
