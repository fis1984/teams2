import React from "react";
import "./header.css";

function Header() {
    return (
        <div className="header">
            <div className="header-menu">
                <i className="fi fi-rr-layout-fluid"></i>
            </div>
            <div className="header-leftFold">
                <label className="header-label">Microsoft Teams Clone</label>
            </div>
            <div className="header-rightFold">
                <div className="header-search">
                    <i className="fi fi-rr-search"></i>
                    <input placeholder="Seach" />
                </div>
                <div className="header-profile">
                    <div className="header-options">
                        <i className="fi fi-rr-menu-dots"></i>
                    </div>
                    <img
                        className="header-avatar"
                        alt="profile"
                        src="https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Wayfarers&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Wink&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=Light"
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
