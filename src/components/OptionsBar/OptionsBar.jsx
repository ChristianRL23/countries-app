import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';
import Filter from '../Filter/Filter';
import './OptionsBar.scss';
import searchIcon from './search-outline.svg';

const OptionsBar = () => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  return (
    <form className="options-bar">
      <div className={`options-bar__search--${currentTheme}`}>
        <img
          src={searchIcon}
          className={`search__icon--${currentTheme}`}
          alt="Search icon"
        />
        <input
          className={`search__input--${currentTheme}`}
          placeholder="Search for a country..."
        />
      </div>
      <Filter />
    </form>
  );
};

export default OptionsBar;
