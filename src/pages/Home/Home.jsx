import React from "react";
import s from "./Home.module.scss";
import dark from "./../../assets/img/dark-side.jpg";
import light from "./../../assets/img/light-side.jpg";
import {ThemeContext} from "../../providers/ThemProvider";
import {useContext} from "react";

export const Home = () => {
  const {setIsLight} = useContext(ThemeContext);

  return (
	  <>
		  <h1 className={s.title}>Choose your side</h1>
      <div className={s.wrapper}>
        <div className={s.img}>
          <img onClick={() => setIsLight(false)} src={dark} alt='dark side' />
        </div>
        <div className={s.img}>
          <img onClick={() => setIsLight(true)} src={light} alt='light side' />
        </div>
      </div>
    </>
  );
};
