import Navbar from './components/Navbar/Navbar';
import './App.scss';
import { useContext } from 'react';
import ThemeContext from './context/themeContext';
import Main from './layouts/Main/Main';
import { CountriesContextProvider } from './context/countriesContext';

function App() {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  return (
    <div className={`app--${currentTheme}`}>
      <CountriesContextProvider>
        <Navbar />
        <Main />
      </CountriesContextProvider>
    </div>
  );
}

export default App;
