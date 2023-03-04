import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import s from "./Favorite.module.scss";

export const Favorite = () => {
	const { id } = useParams;
	console.log(id);
  const {personInFavorite} = useSelector((state) => state.favorite);

  return (
    <ul className={s.wrapper}>
      {personInFavorite.map((item) => (
        <li>
          <Link to={`/people/${item.id}`}>
            <img className={s.personPicture} src={item.personPicture} alt='personPicture' />
            <p className={s.name}>{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
