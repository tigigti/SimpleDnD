import React from "react";

const AbilityPoint = ({ children }) => {
    return (
        <div className="ap-container">
            <span className="ability">{children}</span>
            <span className="value">Value</span>
            <span className="modifier">+1</span>
        </div>
    );
};

export default AbilityPoint;
