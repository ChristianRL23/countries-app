import { useContext, useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import ThemeContext from '../../context/themeContext';
import './Main.scss';

const Main = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountriesData();
  }, []);
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  const countriesFetched = [];

  const fetchCountriesData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();

    const countriesIndexesFetched = [];

    const generateRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const generateNewNumberAndVerifyIt = () => {
      const randomNumber = generateRandomNumber(0, 249);
      const repeatedRandomNumber = countriesIndexesFetched.find(
        (number) => number === randomNumber
      );
      if (!repeatedRandomNumber) {
        countriesIndexesFetched.push(randomNumber);
        return;
      } else {
        generateNewNumberAndVerifyIt();
      }
    };

    for (let i = 0; i < 8; i++) {
      if (countriesIndexesFetched.length === 0) {
        const firstRandomNumber = generateRandomNumber(0, 249);
        countriesIndexesFetched.push(firstRandomNumber);
      } else {
        generateNewNumberAndVerifyIt();
      }
    }

    countriesIndexesFetched.forEach((index) => {
      countriesFetched.push(data[index]);
    });

    setCountries([...countriesFetched]);
  };

  return (
    <main className={`main--${currentTheme}`}>
      <OptionsBar />
      <div className="main__countries-cards">
        {countries.map((country) => (
          <CountryCard
            countryFlagImg={country.flags.png}
            countryPopulation={country.population}
            countryName={country.name.common}
            countryRegion={country.region}
            countryCapital={country.capital}
          />
        ))}
      </div>
    </main>
  );
};

export default Main;
