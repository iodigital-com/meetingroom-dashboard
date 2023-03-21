import axios, { isCancel, AxiosError } from 'axios';

export const fetchData = (url: string, method: string, data: any) => {
  return axios({
    method,
    url,
    data
  })
}
