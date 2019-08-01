import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="header-wrapper">
            <div className="header">
                <div className="brand">Simple DnD</div>
                <div className="toggler" onClick={() => setOpen(!open)}>
                    Toggler
                </div>
                <div className={open ? "navbar open" : "navbar"}>
                    <Link to="/">Home</Link>
                    <Link to="CharacterCreator">Character Creator</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
