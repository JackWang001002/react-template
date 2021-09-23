/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import axios from 'axios';
import { useState } from 'react';

interface IErrorMsg {
  code: number;
  msg: string;
}
const OKCodes = [200];

// axios.defaults.
const useFetch = () => {
  const [error, setError] = useState<null | IErrorMsg>(null);
  const [data, setData] = useState<null | any>(null);
  const get = async (url: string) => {
    try {
      const res = await axios.get(url);
      if (res.status !== 200) {
        setError({ code: res.status, msg: '2' });
        return;
      }
      if (res.data.code && !OKCodes.includes(res.data.code)) {
        setError({ code: res.data.code, msg: 'error' });
        return;
      }
      setData(res.data);
    } catch (e) {
      console.error(e);
      setError({ code: 500, msg: '4' });
    }
  };
  const post = (url: string) => {
    return axios.post(url);
  };
  return {
    get,
    post,
    error,
    data,
  };
};

export { useFetch };
