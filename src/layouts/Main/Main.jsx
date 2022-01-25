import { useContext } from 'react';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import ThemeContext from '../../context/themeContext';
import CountryCard from '../../components/CountryCard/CountryCard';
import './Main.scss';

const Main = ({ countries, countriesToDisplay }) => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  return (
    <main className={`main--${currentTheme}`}>
      <OptionsBar />
      <div className="main__countries-cards">
        {countries.length === 0 ? (
          <p>Loading...</p>
        ) : (
          countriesToDisplay.map((country) => (
            <CountryCard
              countryFlagImg={country.flags.png}
              countryPopulation={country.population}
              countryName={country.name}
              countryRegion={country.region}
              countryCapital={country.capital}
            />
          ))
        )}
      </div>
    </main>
  );
};

export default Main;
