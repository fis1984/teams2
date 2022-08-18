import React from "react";
import "./left-fold.css";
import { CallsMenu, DialerList } from "../../../data/calls";
import MenuItem from "./menu-item";
import DialerItem from "./dialer-item";

function LeftFold() {
    const menu = CallsMenu;
    const dialerList = DialerList;

    return (
        <div className="leftFold">
            <div className="leftFold-menu">
                <label className="menu-label">Calls</label>
                <div className="menu-items">
                    {menu.map((item) => {
                        return (
                            <MenuItem key={item.id + item.name} item={item} />
                        );
                    })}
                </div>
            </div>
            <div className="leftFold-dialer">
                <label className="dialer-label">Make a call</label>
                <div className="dialer-search">
                    <input placeholder="Type a name" />
                </div>
                <div className="dialer-suggested">
                    <label className="suggested-label">Suggested</label>
                    <div className="suggested-list">
                        {dialerList.map((item) => {
                            return (
                                <DialerItem
                                    key={item.id + item.name}
                                    item={item}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="dialer-bottom">
                    <div className="dialer-bottom-icon">
                        <i className="fi fi-rr-microphone"></i>
                    </div>
                    <div className="dialer-bottom-icon">
                        <i className="fi fi-rr-play-alt"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftFold;
