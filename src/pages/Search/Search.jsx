import React, {useCallback} from "react";
import {useState} from "react";
import {debounce} from "lodash";

import {getApiResource} from "../../utils/network";
import {API_SEARCH} from "../../constants/api";
import {getPeopleId, getPeopleImage} from "../../services/getPeopleData";

import s from "./Search.module.scss";
import {SearchPeople} from "../../components/SearchPeople/SearchPeople";
import {UIInput} from "../../components/UI/UIInput/UIInput";
import {useEffect} from "react";

export const Search = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getResponse("");
  }, []);

  const getResponse = async (value) => {
    const res = await getApiResource(API_SEARCH + value);
    setPeople(
      res.results.map(({name, url}) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);
        return {
          name,
          img,
          id,
        };
      }),
    );
  };
	
  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 400),
    [],
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInputValue(value);
    debouncedGetResponse(value);
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Search</h2>
      <UIInput
        placeholder='Enter text'
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
        handleInputChange={handleInputChange}
			  classes={s.searchInput}
			  getResponse={getResponse}
      />
      <SearchPeople people={people} />
    </div>
  );
};
