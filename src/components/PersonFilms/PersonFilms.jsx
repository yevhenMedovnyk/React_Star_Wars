import React from "react";
import {useState, useEffect} from "react";
import {makeConcurrentRequest} from "../../utils/network";
import s from "./PersonFilms.module.scss";

 const PersonFilms = ({personFilms}) => {
  const [filmNames, setFilmNames] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await makeConcurrentRequest(personFilms);
      setFilmNames(res);
    })();
  }, []);

  return (
    <ul>
      {filmNames
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(({title, episode_id}) => (
          <li key={episode_id}>
            <span>Episode {episode_id}</span>
            <span> : </span>
            <span>{title}</span>
          </li>
        ))}
    </ul>
  );
 };

 export default PersonFilms
