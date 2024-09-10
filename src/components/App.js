import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
       <Header  isDarkMode = {isDarkMode} onDarkModeClick= {onDarkModeClick}/>
        <ShoppingList items={items}/>
      </div>
  );
}

export default App;
