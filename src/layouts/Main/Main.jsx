import { useContext, useEffect, useState } from 'react';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import ThemeContext from '../../context/themeContext';
import './Main.scss';

const Main = () => {
  useEffect(() => {
    fetchCountriesData();
  }, []);
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';
  /* const [fetchingData, setFechingData] = useState(false); */

  const fetchCountriesData = async () => {
    /* setFechingData(true); */
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    /* setFechingData(false); */

    const countriesIndexesFetched = [];
    const countriesFetched = [];

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

    console.log(countriesFetched);
  };

  return (
    <main className={`main--${currentTheme}`}>
      <OptionsBar />
    </main>
  );
};

export default Main;
