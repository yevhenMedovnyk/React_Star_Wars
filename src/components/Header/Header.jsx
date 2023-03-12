import React from "react";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import s from "./Header.module.scss";

import logo_light from "../../assets/img/wars_icon.svg";
import logo_dark from "../../assets/img/dark-icon.svg";
import favorite from "../../assets/img/favorite.svg";

export const Header = () => {
  const {personInFavorite} = useSelector((state) => state.favorite);
  const {isLight} = useSelector((state) => state.theme);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Link to='/' className={s.logo}>
          <img src={isLight ? logo_light : logo_dark} alt={logo_light} />
        </Link>
        <nav className={s.menu}>
          <ul className={s.menu}>
            <li className={s.menuList}>
              <NavLink to='/' className={s.menuLink}>
                Home
              </NavLink>
              <NavLink to='/people?page=1' className={s.menuLink}>
                People
              </NavLink>
              <NavLink to='/search' className={s.menuLink}>
                Search
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to='/favorite' className={s.favorites}>
          <img src={favorite} alt='favorite' />
          {personInFavorite.length > 0 && (
            <span className={s.favoriteCounter}>{personInFavorite.length}</span>
          )}
        </Link>
      </div>
    </header>
  );
};
