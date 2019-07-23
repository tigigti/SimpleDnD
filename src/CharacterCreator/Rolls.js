import React, { useState } from "react";
import AbilityPoint from "./AbilityPoint";
const diceSound = new Audio("dice_sound.mp3");

const Rolls = ({ values, roll }) => {
    const [isRolling, setIsRolling] = useState(false);

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
            <div key={i} className="col grid">
                <div className={isRolling ? "cube rolling" : "cube"}>{value}</div>
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
                <div className="grid col row-sm" style={{ flex: 10 }}>
                    <div className="grid row">{renderRollsPart(0, 3)}</div>
                    <div className="grid row">{renderRollsPart(3, 6)}</div>
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
    );
};

export default Rolls;
