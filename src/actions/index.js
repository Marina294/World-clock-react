import Cookies from 'js-cookie';

export const ADD_TIMEZONE = 'ADD_TIMEZONE';
export const DELETE_TIMEZONE = 'DELETE_TIMEZONE';
export const ADD_TIMEZONES = 'ADD_TIMEZONES';
export const LOAD_COOKIE = 'LOAD_COOKIE';
export const SORT_TIMEZONES = 'SORT_TIMEZONES';


export function addTimezone(name) {
  return {
    type: ADD_TIMEZONE,
    payload: name
  }
}

export function deleteTimezone(name) {
  return {
    type: DELETE_TIMEZONE,
    payload: name
  }
}

export function loadCookie(name) {
  const timezones = Cookies.getJSON('timezones');
  return {
    type: LOAD_COOKIE,
    payload: timezones,
  }
}

export function sortTimezones(oldIndex, newIndex) {
  return {
    type: SORT_TIMEZONES,
    payload: {oldIndex, newIndex}
  }
}
