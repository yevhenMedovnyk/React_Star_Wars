import React from "react";
import {Link} from "react-router-dom";
import s from "./SearchPeople.module.scss";

export const SearchPeople = ({people}) => {
  return (
    <ul className={s.wrapper}>
      {people.map(({name, img, id}) => (
        <li key={id}>
          <Link to={`/people/${id}`}>
            <img className={s.personImg} src={img} alt={name} />
            <span className={s.name}>{name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};
