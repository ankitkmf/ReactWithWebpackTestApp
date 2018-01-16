import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
    return (
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
            <nav className="navbar navbar-light bg-light">
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/user'>User</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/aboutus'>About-US</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};