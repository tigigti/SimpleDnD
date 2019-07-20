import React, { useState } from "react";
import posed from "react-pose";
import { IconContext } from "react-icons";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const SelectContainer = posed.ul({
    open: {
        staggerChildren: 50,
        height: "auto",
        transition: { duration: 200 },
        applyAtStart: { display: "block" }
    },
    closed: {
        height: 0,
        afterChildren: true,
        applyAtEnd: { display: "none" }
    }
});

const OptionContainer = posed.li({
    open: {
        opacity: 1
    },
    closed: {
        opacity: 0,
        transition: { duration: 100 }
    }
});

const iconStyles = {
    verticalAlign: "middle"
};

export const Select = ({ children, onChange, label }) => {
    const [value, setValue] = useState(children[0].props.children);
    const [open, setOpen] = useState(false);

    const changeValue = (children, value) => {
        console.log("Child with value " + value + " clicked");
        setValue(children);
        setOpen(!open);
        onChange && onChange(value);
    };

    const options = React.Children.map(children, child => React.cloneElement(child, { clicked: changeValue }));

    return (
        <div>
            <span className="label">{label}</span>
            <div className="value-container" onClick={() => setOpen(!open)}>
                <span>{value}</span>
                <IconContext.Provider value={{ style: iconStyles }}>
                    <span>{(open && <FiChevronUp />) || <FiChevronDown />}</span>
                </IconContext.Provider>
            </div>
            <SelectContainer pose={open ? "open" : "closed"} className="select">
                {options}
            </SelectContainer>
        </div>
    );
};

export const Option = ({ children, clicked, value }) => {
    return (
        <OptionContainer className="option" onClick={() => clicked(children, value)}>
            {children}
        </OptionContainer>
    );
};
