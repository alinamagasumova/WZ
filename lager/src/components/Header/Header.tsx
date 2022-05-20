import React from "react";
import './Header.scss';
// @ts-ignore
import bell from './bell.svg';
// @ts-ignore
import user from './user.svg';


export function Header() {
    return (
        <header className="header">
            <a href=""><img src={bell} alt="bell"/></a>
            <a href=""><img src={user} alt="user"/></a>
        </header>
    )
}