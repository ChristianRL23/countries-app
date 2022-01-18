import './Navbar.scss';
import darkThemeIcon from './moon-outline.svg';
import lightThemeIcon from './sunny-outline.svg';
import { useContext } from 'react';
import ThemeContext from './../../context/themeContext';

const Navbar = () => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  return (
    <nav className={`navbar--${currentTheme}`}>
      <h1 className="navbar__logo">Where in the world?</h1>
      <div
        onClick={themeCtx.changeThemeHandler}
        className="navbar__theme-changer"
      >
        <img
          className={`theme-changer__icon--${currentTheme}`}
          src={themeCtx.darkTheme ? lightThemeIcon : darkThemeIcon}
          alt="Theme Icon"
        />
        <h6 className="theme-changer__text">
          {themeCtx.darkTheme ? 'Light' : 'Dark'} Mode
        </h6>
      </div>
    </nav>
  );
};

export default Navbar;
