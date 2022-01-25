import { useContext, useState } from 'react';
import CountriesContext from '../../context/countriesContext';
import ThemeContext from '../../context/themeContext';
import Filter from '../Filter/Filter';
import './OptionsBar.scss';
import searchIcon from './search-outline.svg';

const OptionsBar = () => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';
  const [searchInput, setSearchInput] = useState('');
  const countriesCtx = useContext(CountriesContext);

  const searchBarTypingHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchCountry = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://restcountries.com/v2/name/${searchInput}`
    );
    const data = await response.json();
    countriesCtx.setCountrySelected(data[0].name);
    setSearchInput('');
  };

  return (
    <form onSubmit={searchCountry} className="options-bar">
      <div className={`options-bar__search--${currentTheme}`}>
        <img
          src={searchIcon}
          className={`search__icon--${currentTheme}`}
          alt="Search icon"
        />
        <input
          onChange={searchBarTypingHandler}
          value={searchInput}
          className={`search__input--${currentTheme}`}
          placeholder="Search for a country..."
        />
      </div>
      <Filter />
    </form>
  );
};

export default OptionsBar;
