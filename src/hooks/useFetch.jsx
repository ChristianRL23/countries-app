import { useEffect, useState, useContext } from 'react';
import CountriesContext from '../context/countriesContext';

const useFetch = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToDisplay, setCountriesToDisplay] = useState([]);
  const countriesFilterCtx = useContext(CountriesContext);
  const { countriesFilter } = countriesFilterCtx;

  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      setCountries(data);
    };

    fetchCountriesData();
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      if (countriesFilterCtx.countriesFilter !== 'All') {
        if (countriesFilterCtx.countriesFilter === 'America') {
          const regionCountries = countries.filter(
            (country) => country.region === 'Americas'
          );
          setCountriesToDisplay(regionCountries);
        } else {
          const regionCountries = countries.filter(
            (country) => country.region === countriesFilterCtx.countriesFilter
          );
          setCountriesToDisplay(regionCountries);
        }
      } else {
        setCountriesToDisplay(countries);
      }
    }
  }, [countries, countriesFilter]);

  return [countries, countriesToDisplay];
};

export default useFetch;
