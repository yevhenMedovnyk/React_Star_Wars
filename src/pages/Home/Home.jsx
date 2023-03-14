import React from "react";
import s from "./Home.module.scss";
import dark from "./../../assets/img/dark-side.jpg";
import light from "./../../assets/img/light-side.jpg";
import {useDispatch} from "react-redux";
import {themeChanger} from "../../redux/sliceThemeChange";
import {setLocalStorage} from "../../utils/localStorage";

export const Home = () => {
  const dispatch = useDispatch();

  const onClickDarkTheme = () => {
    dispatch(themeChanger(false));
    setLocalStorage("theme", false);
  };
  const onClickLightTheme = () => {
    dispatch(themeChanger(true));
    setLocalStorage("theme", true);
  };

  return (
    <>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>Choose your side</h1>
      </div>
      <div className={s.wrapper}>
        <div className={s.img}>
          <img onClick={onClickDarkTheme} src={dark} alt='dark side' />
        </div>
        <div className={s.img}>
          <img onClick={onClickLightTheme} src={light} alt='light side' />
        </div>
      </div>
    </>
  );
};
