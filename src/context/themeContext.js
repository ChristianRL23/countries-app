import React, { useState } from 'react';

const ThemeContext = React.createContext({
  darkTheme: false,
  changeThemeHandler: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeThemeHandler = () => setDarkTheme(!darkTheme);

  return (
    <ThemeContext.Provider value={{ darkTheme, changeThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
