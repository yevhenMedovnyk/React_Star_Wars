import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import s from "./Favorite.module.scss";

export const Favorite = () => {
  const {id} = useParams;
  console.log(id);
  const {personInFavorite} = useSelector((state) => state.favorite);

  return (
    <ul className={s.wrapper}>
      {personInFavorite.map((item) => (
        <li key={item.id}>
          <Link to={`/people/${item.id}`}>
            <div className={s.img_wrapper}>
              <img src={item.personPicture} alt='personPicture' />
            </div>
            <p className={s.name}>{item.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
