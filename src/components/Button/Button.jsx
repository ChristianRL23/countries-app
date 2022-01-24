import { useContext } from 'react';
import ThemeContext from '../../context/themeContext';
import './Button.scss';

const Button = ({ icon, textContent, clickFn }) => {
  const themeCtx = useContext(ThemeContext);
  const currentTheme = themeCtx.darkTheme ? 'dark' : 'light';

  if (icon) {
    return (
      <div onClick={clickFn} className={`button--${currentTheme}`}>
        <img
          className={`button__icon--${currentTheme}`}
          src={icon}
          alt="Arrow"
        />
        <p className={`button__text--${currentTheme}`}>{textContent}</p>
      </div>
    );
  } else {
    return (
      <div className={`button--text--${currentTheme}`}>
        <p className={`button__text--${currentTheme}`}>{textContent}</p>
      </div>
    );
  }
};

export default Button;
