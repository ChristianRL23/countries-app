import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CountriesContextProvider } from './context/countriesContext';
import { ThemeContextProvider } from './context/themeContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CountriesContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </CountriesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
