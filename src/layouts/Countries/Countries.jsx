import './Countries.scss';
import { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountriesData();
  }, []);

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
    <main className={`countries}`}>
      <div className="countries__cards">
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

export default Countries;
