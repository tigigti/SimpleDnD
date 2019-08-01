import React from "react";

const AssignMenu = ({ assignMenuOpen, assigningDice, abilities, assignValues, setAssignMenuOpen }) => {
    const abilityClicked = abilityIndex => {
        console.log("Ability " + abilityIndex + " was clicked");
        setAssignMenuOpen(false);
        assignValues(abilityIndex, assigningDice);
    };

    if (assignMenuOpen) {
        return (
            <div className="assign-menu">
                {abilities.map((ability, i) => (
                    <div className="assign-option" key={ability} onClick={() => abilityClicked(i)}>
                        {ability}
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export default AssignMenu;
