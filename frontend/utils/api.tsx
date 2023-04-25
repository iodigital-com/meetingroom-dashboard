import axios from 'axios';

export const fetchData = (url: string, method: string, data: any) => {
  return axios({
    method,
    url,
    data
  })
}

export const fetchDataFromServer = async (url: string, method: string, data: any) => {
  return fetch(url, {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    body: data
  })
}