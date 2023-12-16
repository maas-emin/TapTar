import axios from 'axios';

let withCredentials = false;

const headers = {
  'X-CSRF-TOKEN': 'XSRF-TOKEN',
  'Access-Control-Allow-Origin': '*',
  'X-Requested-With': 'XMLHttpRequest',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  'Content-Type': 'application/json',
  'X-Custom-Header': 'foobar',
};

export const api = axios.create({
  baseURL: process.env.REACT_APP_TEPTAR_URL,
  withCredentials: withCredentials,
  headers,
});
