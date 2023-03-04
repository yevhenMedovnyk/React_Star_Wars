//common
export const HTTPS = 'https://';
export const HTTP = 'http://';

//swapi
export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people/';
const API_PARAMS_PAGE = '?page='
export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + API_PARAMS_PAGE;
export const API_PERSONE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;

//visualguide
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTANTION = '.jpg';
export const GUIDE_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;
