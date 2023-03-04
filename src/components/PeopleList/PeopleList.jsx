import React from "react";
import {Link} from "react-router-dom";

import s from "./PeopleList.module.scss";

export const PeopleList = ({people}) => {
  return (
    <>
      {" "}
      {people?.map(({name, img, id}) => (
        <li className={s.wrapper} key={name}>
          <Link to={`/people/${id}`}>
            <img src={img} alt={name} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </>
  );
};
