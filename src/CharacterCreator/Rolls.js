import React, { useState } from "react";
import AbilityPoint from "./AbilityPoint";
import AssignMenu from "./AssignMenu";

const diceSound = new Audio("dice_sound.mp3");

const Rolls = ({ values, roll, assignedValues, assignValues, modifier }) => {
    const [isRolling, setIsRolling] = useState(false);
    const [assignMenuOpen, setAssignMenuOpen] = useState(false);
    const [assigningDice, setAssigningDice] = useState(0);

    const abilities = ["Strength", "Dexterity", "Consitution", "Intelligence", "Wisdom", "Charisma"];

    const rotateDice = () => {
        if (isRolling === true) {
            return;
        }
        setIsRolling(true);
        setTimeout(() => setIsRolling(false), 500);
    };

    const rollValues = () => {
        diceSound.pause();
        diceSound.currentTime = 0;
        rotateDice();

        const rolledValues = [];

        const d6 = () => Math.floor(Math.random() * 6) + 1;

        for (let i = 1; i <= 6; i++) {
            const tempRolls = [];
            for (let j = 1; j <= 4; j++) {
                tempRolls.push(d6());
            }
            const smallestValue = Math.min(...tempRolls);
            const indexOfSmallestValue = tempRolls.findIndex(roll => roll === smallestValue);
            tempRolls.splice(indexOfSmallestValue, 1);
            // Now add the values
            const finalRoll = tempRolls.reduce((accumulator, currentValue) => accumulator + currentValue);
            rolledValues.push(finalRoll);
        }
        roll(rolledValues);
        diceSound.play();
    };

    const renderRollsPart = (start, end) => {
        return values.slice(start, end).map((value, i) => (
            <div key={start + i} className="col grid">
                <div
                    onClick={() => {
                        setAssignMenuOpen(true);
                        setAssigningDice(start + i);
                    }}
                    className={isRolling ? "cube rolling" : "cube"}
                >
                    {value}
                </div>
            </div>
        ));
    };

    return (
        <div className="grid">
            <div className="col grid row-md">
                <div className="col" style={{ flex: 2 }}>
                    <button className="btn-primary responsive" onClick={rollValues}>
                        Roll
                    </button>
                </div>
                <AssignMenu
                    assigningDice={assigningDice}
                    assignMenuOpen={assignMenuOpen}
                    abilities={abilities}
                    assignValues={assignValues}
                    setAssignMenuOpen={setAssignMenuOpen}
                />
                <div className="grid col row-sm" style={{ flex: 10 }}>
                    <div className="grid row">{renderRollsPart(0, 3)}</div>
                    <div className="grid row">{renderRollsPart(3, 6)}</div>
                </div>
            </div>

            <div className="col grid row-md">
                {abilities.map((ability, i) => {
                    return (
                        <div className="col" key={ability}>
                            <AbilityPoint ability={ability} modifier={modifier[i]} value={values[assignedValues[i]]} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Rolls;
