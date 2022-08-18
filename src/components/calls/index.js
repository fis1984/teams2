import React from "react";
import Header from "../common/header";
import Sidebar from "../common/sidebar";
import LeftFold from "./left-fold";
import RightFold from "./right-fold";
import "./calls.css";

function Calls() {
    return (
        <div className="calls-container">
            <Header />
            <div className="calls-body">
                <div className="calls-sidebar">
                    <Sidebar />
                </div>
                <div className="calls-leftFold">
                    <LeftFold />
                </div>
                <div className="calls-rightFold">
                    <RightFold />
                </div>
            </div>
        </div>
    );
}

export default Calls;
