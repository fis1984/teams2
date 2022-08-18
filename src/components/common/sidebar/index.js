import React, { useState } from "react";
import "./sidebar.css";
import { SidebarBottom, SidebarData, SidebarMore } from "../../../data/sidebar";
import SidebarOption from "./sidebar-option";

function Sidebar() {
    const [nameActive, setNameActive] = useState("Calls");

    const topOptions = SidebarData;
    const more = SidebarMore;
    const bottomOptions = SidebarBottom;

    const handleCallback = (name) => {
        setNameActive(name);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <div>
                    {topOptions.map((option) => {
                        return (
                            <SidebarOption
                                key={option.name + option.id}
                                option={option}
                                isActive={
                                    option.name === nameActive ? true : false
                                }
                                parentCallback={handleCallback}
                            />
                        );
                    })}
                    <div>
                        <SidebarOption option={more} />
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
                {bottomOptions.map((option) => {
                    return (
                        <SidebarOption
                            key={option.name + option.id}
                            option={option}
                            isActive={option.name === nameActive ? true : false}
                            parentCallback={handleCallback}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
