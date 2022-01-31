/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from 'react';
import CountriesContext from '../context/countriesContext';

const useFetch = () => {
  const [countries, setCountries] = useState([]);
  const [countriesToDisplay, setCountriesToDisplay] = useState([]);
  const countriesFilterCtx = useContext(CountriesContext);
  const { countriesFilter } = countriesFilterCtx;

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        if (response.ok === false)
          throw new Error('Something went wrong! Please reload the page.');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        alert(error.message);
      }
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
