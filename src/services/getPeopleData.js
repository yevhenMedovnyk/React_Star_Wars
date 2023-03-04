import {
  HTTP,
  HTTPS,
  SWAPI_PEOPLE,
  SWAPI_ROOT,
  GUIDE_IMG_PERSON,
  GUIDE_IMG_EXTANTION,
} from '../constants/api';

const checkProtocol = (url) => {
  if (url.indexOf(HTTPS) !== -1) {
    return HTTPS;
  }

  return HTTP;
};

const getId = (url, category) => {
  const protocol = checkProtocol(url);

  const id = url
    .replace(HTTP + SWAPI_ROOT + category, '')
    .replace(protocol + SWAPI_ROOT + category, '')
    .replace(/\//g, '');

  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);
export const getPeopleImage = (id) => `${GUIDE_IMG_PERSON}/${id + GUIDE_IMG_EXTANTION}`;
