import './Navbar.scss';
import darkThemeIcon from './moon-outline.svg';
import lightThemeIcon from './sunny-outline.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">Where in the world?</h1>
      <div className="navbar__theme-changer">
        <img
          className="theme-changer__icon"
          src={darkThemeIcon}
          alt="Theme Icon"
        />
        <h6 className="theme-changer__text">Dark Mode</h6>
      </div>
    </nav>
  );
};

export default Navbar;
