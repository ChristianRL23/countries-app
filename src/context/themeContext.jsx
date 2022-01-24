import React, { useState } from 'react';

const ThemeContext = React.createContext({
  darkTheme: false,
  changeThemeHandler: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeThemeHandler = () => {
    setDarkTheme((lastState) => !lastState);
    const backgroundColor =
      darkTheme === true ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)';
    document.body.style.backgroundColor = backgroundColor;
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, changeThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
