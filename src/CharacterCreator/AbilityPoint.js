import React from "react";

const AbilityPoint = ({ ability, value, modifier }) => {
    return (
        <div className="ap-container">
            <span className="ability">{ability}</span>
            <span className="value">{value}</span>
            <span className="modifier">{modifier < 0 ? "- " + modifier : "+ " + modifier}</span>
        </div>
    );
};

export default AbilityPoint;
