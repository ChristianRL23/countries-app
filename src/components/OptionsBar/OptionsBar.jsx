import Filter from '../Filter/Filter';
import './OptionsBar.scss';
import searchIcon from './search-outline.svg';

const OptionsBar = () => {
  return (
    <form className="options-bar">
      <div className="options-bar__search">
        <img src={searchIcon} className="search__icon" alt="Search icon" />
        <input
          className="search__input"
          placeholder="Search for a country..."
        />
      </div>
      <Filter />
    </form>
  );
};

export default OptionsBar;
