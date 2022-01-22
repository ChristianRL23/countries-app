import { useEffect, useState } from 'react';
import CountryCard from '../../components/CountryCard/CountryCard';
import {
  generateRandomNumber,
  generateNewNumberAndVerifyIt,
} from '../../utils/randomNumbers';

const All = ({ countries }) => {
  const [countriesFetched, setCountriesFetched] = useState([]);
  const countriesIndexes = [];
  const countriesFetch = [];
  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      if (countriesIndexes.length === 0) {
        const firstRandomNumber = generateRandomNumber(0, 249);
        countriesIndexes.push(firstRandomNumber);
      } else {
        generateNewNumberAndVerifyIt(countriesIndexes);
      }
    }

    countriesIndexes.forEach((index) => {
      console.log('hello');
      countriesFetch.push(countries[index]);
    });

    setCountriesFetched(countriesFetch);
  }, []);

  return countriesFetched.map((country) => (
    <CountryCard
      countryFlagImg={country.flags.png}
      countryPopulation={country.population}
      countryName={country.name.common}
      countryRegion={country.region}
      countryCapital={country.capital}
    />
  ));
};

export default All;
