import { useState } from "react";

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="./library_-removebg-preview.png" alt="" />
            </div>

            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                        <a href="">Library</a>
                        <a href="">About us</a>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className="icons">

            </div>
        </header>
    )
}

export default Header;
