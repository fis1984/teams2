import React from "react";
import "./sidebar-option.css";

function SidebarOption({ option, isActive, parentCallback }) {
    const classList = isActive ? "sidebar-option active" : "sidebar-option";

    const handleClick = (name, e) => {
        e.preventDefault();
        parentCallback(name);
    };

    return (
        <div className={classList} onClick={(e) => handleClick(option.name, e)}>
            <div className="sidebar-icon">{option.icon}</div>
            {option.name && (
                <label className="sidebar-label">{option.name}</label>
            )}
        </div>
    );
}

export default SidebarOption;
