import React, {useEffect, useRef, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import s from "./Header.module.scss";

import logo_light from "../../assets/img/wars_icon.svg";
import logo_dark from "../../assets/img/dark-icon.svg";
import favorite from "../../assets/img/favorite.svg";
import burger from "../../assets/img/burger.svg";
import burger_opened from "../../assets/img/burger-opened.svg";

const linksArr = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "People",
    link: "/people?page=1",
  },
  {
    name: "Search",
    link: "/search",
  },
];

export const Header = () => {
  const {personInFavorite} = useSelector((state) => state.favorite);
  const {isLight} = useSelector((state) => state.theme);
  const [isBurgerOpened, setIsBurgerOpened] = useState(false);
  const menuRef = useRef(null);
  const burgerBtnRef = useRef(null);

  const closeBurgerMenu = () => {
    setIsBurgerOpened(false);
  };

  useEffect(() => {
    const onClickOutsideMenu = (e) => {
      const menuPath = e.composedPath().includes(menuRef.current);
      const btnPath = e.composedPath().includes(burgerBtnRef.current);
      if (!btnPath && !menuPath) {
        setIsBurgerOpened(false);
      }
    };
    document.addEventListener("click", onClickOutsideMenu);
    return () => document.removeEventListener("click", onClickOutsideMenu);
  }, []);

  useEffect(() => {
    if (isBurgerOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isBurgerOpened]);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <Link to='/' className={s.logo}>
          <img src={isLight ? logo_light : logo_dark} alt={logo_light} />
        </Link>
        <nav className={s.menu}>
          <ul ref={menuRef} className={[s.menuList, isBurgerOpened ? s.open : ""].join(" ")}>
            {linksArr.map(({name, link}) => (
              <li key={link}>
                <NavLink className={s.menuLink} to={link} onClick={closeBurgerMenu}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div
          ref={burgerBtnRef}
          className={s.burger}
          onClick={() => setIsBurgerOpened(!isBurgerOpened)}
        >
          <img src={isBurgerOpened ? burger_opened : burger} alt='burger' />
        </div>
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
