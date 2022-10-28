import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function ThemeSwitch() {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        padding: 5,
        borderRadius: 5,
        color: currentTheme === "light" ? "white" : "black",
        background: currentTheme === "light" ? "black" : "white",
      }}
      onClick={() =>
        changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
    >
      {currentTheme === "light" ? "DARK" : "LIGHT"} MODE
    </button>
  );
}

export default ThemeSwitch;
