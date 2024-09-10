import React from "react";

function Header({isDarkmode, onDarkModeClick}) {
    return (
        <header>
            <h2>Shopter</h2>
            <button onClick={onDarkModeClick}> {isDarkmode ? "Dark Mode": "Light Mode" }
                </button>
        </header>
    );

}

export default Header;