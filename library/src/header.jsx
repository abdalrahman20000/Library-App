import { useState } from "react";
import { Link } from "react-router-dom";

function HeaderVisitor() {
    return (
        <header>
            <div className="logo">
                <img src="./library_-removebg-preview.png" alt="" />
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/aboutus">About us</Link>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <div className="icons">
                <Link to="/signUp">Sign up</Link>
            </div>
        </header>
    )
}

export default HeaderVisitor;
