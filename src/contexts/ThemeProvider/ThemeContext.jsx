import { createContext } from 'react';

const defaultValue = {
  currentTheme: 'dark',
  changeCurrentTheme: (newTheme) => {},
}

const ThemeContext = createContext(defaultValue);

export default ThemeContext;
