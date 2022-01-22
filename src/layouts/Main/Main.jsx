import { useContext, useEffect, useState } from 'react';
import OptionsBar from '../../components/OptionsBar/OptionsBar';
import ThemeContext from '../../context/themeContext';
import All from '../All/All';
import './Main.scss';

const Main = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountriesData();
  }, []);
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  const fetchCountriesData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    setCountries(data);
  };

  return (
    <main className={`main--${currentTheme}`}>
      <OptionsBar />
      <div className="main__countries-cards">
        {countries.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <All countries={countries} />
        )}
      </div>
    </main>
  );
};

export default Main;
