import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeProvider/ThemeContext";
import { Moon, Sun } from 'react-feather';

function ThemeSwitch() {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <button
      className="text-neutral-50"
      onClick={() =>
        changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
      }
    >
      {currentTheme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeSwitch;
