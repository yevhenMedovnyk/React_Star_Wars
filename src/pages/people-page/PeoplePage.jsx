import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {getApiResource} from "../../utils/network";
import {API_PEOPLE} from "../../constants/api";
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";
import {useQueryParams} from "../../hooks/useQueryParams";

import s from "./PeoplePage.module.scss";
import {PeopleList} from "../../components/PeopleList/PeopleList";
import {UIButton} from "../../components/UI/UIButton/UIButton";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage";

export const PeoplePage = () => {
  const [people, setPeople] = useState([]);
  const [errorAPI, setErrorAPI] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const query = useQueryParams();
  const queryPage = query.get("page");

  const getPeople = async (url) => {
    const data = await getApiResource(url);
    if (data) {
      const peopleList = data.results.map(({name, url}) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          name,
          img,
          id,
        };
      });

      setPeople(peopleList);
      setErrorAPI(false);
      setNextPage(data.next);
      setPreviousPage(data.previous);
    } else {
      setErrorAPI(true);
    }
  };

  useEffect(() => {
    getPeople(API_PEOPLE + queryPage);
  }, []);

  const handleClickNext = () => {
    getPeople(nextPage);
    setCurrentPage(Number(queryPage) + 1);
  };
  const handleClickPrev = () => {
    getPeople(previousPage);
    setCurrentPage(Number(queryPage) - 1);
  };

  return (
    <div className={s.wraper}>
      <div className={s.navigation}>
        <div className={s.navigationBtns}>
          <Link to={`/people/?page=${currentPage - 1}`}>
            <UIButton onClick={handleClickPrev} text='Previous' disabled={!previousPage} />
          </Link>
          <Link to={`/people/?page=${currentPage + 1}`}>
            <UIButton onClick={handleClickNext} text='Next' disabled={!nextPage} />
          </Link>
        </div>
      </div>
      <ul className={s.wrapper}>
        {errorAPI ? <ErrorMessage /> : <PeopleList people={people} />}
      </ul>
    </div>
  );
};
