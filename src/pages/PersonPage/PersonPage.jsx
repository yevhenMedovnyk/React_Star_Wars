import React, {useEffect, Suspense} from "react";
import {useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {addPersonToFavorite, removePersonFromFavorite} from "../../redux/sliceMain";
import {getApiResource} from "../../utils/network";
import {getPeopleImage} from "./../../services/getPeopleData";
import {API_PERSONE} from "../../constants/api";
import Loader from "../../components/Loader/Loader";
import s from "./PersonPage.module.scss";
import star from "./../../assets/img/star.svg";
import starW from "./../../assets/img/starW.svg";

const PersonFilms = React.lazy(() => import("../../components/PersonFilms/PersonFilms"));

export const PersonPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {id} = useParams();
  const [person, setPerson] = useState([]);
  const [personPicture, setPersonPicture] = useState("");
  const [personFilms, setPersonFilms] = useState([]);
  const [inFavorite, setInFavorite] = useState(false);

  const {personInFavorite} = useSelector((state) => state.favorite);

  useEffect(() => {
    (async () => {
      const res = await getApiResource(API_PERSONE + id);
      setPerson([...person, res]);
      setPersonPicture(getPeopleImage(id));
      setPersonFilms(res.films);
    })();
    if (personInFavorite.find((el) => el.id === id)) {
      setInFavorite(true);
    } else {
      setInFavorite(false);
    }
  }, []);
  console.log(inFavorite);

  const handleClick = () => {
    navigate(-1);
  };
  const onClickFavorite = (person) => {
    if (!inFavorite) {
      dispatch(addPersonToFavorite({...person, personPicture, id}));
      setInFavorite(true);
    } else {
      dispatch(removePersonFromFavorite(id));
      setInFavorite(false);
    }
  };

  return (
    <>
      <button onClick={handleClick} className={s.goBack}>
        Go back
      </button>
      {person?.map((el) => (
        <div key={el.name} className={s.wrapper}>
          <div className={s.imgWrapper}>
            <img
              onClick={() => onClickFavorite(el)}
              className={s.favoriteBtn}
              src={inFavorite ? star : starW}
              alt='favorite'
            />
            <img className={s.personPicture} src={personPicture} alt='person' />
            <h2 className={s.name}>{el.name}</h2>
          </div>
          <div className={s.textBlock}>
            <ul className={s.PersonInfo}>
              <li>
                Birth year: <span>{el.birth_year}</span>
              </li>
              <li>
                Eye color: <span>{el.eye_color}</span>
              </li>
              <li>
                Height: <span>{el.height}cm</span>
              </li>
              <li>
                Mass: <span>{el.mass}kg</span>
              </li>
            </ul>
            {personFilms.length && (
              <Suspense fallback={<Loader />}>
                <PersonFilms personFilms={personFilms} />
              </Suspense>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
