// import axios from 'axios';

// export const BASE_URL = 'https://api.frankfurter.app/latest';

// const instance = axios.create({
//   baseURL: BASE_URL,
// });

// export const client = {
//   async get<T>(url: string, params: Record<string, unknown> = {from, to}) {
//     params['amount'] = '1';
//     // params['from'] = 'AUD';
//     // params['to'] = 'CAD';

//     const response = await instance.get<T>(url, { params });

//     return response.data;
//   },
// };

import axios from 'axios';

export const BASE_URL = 'https://api.frankfurter.app/latest';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const client = {
  async get<T>(url: string, from: string, to: string) {
    const params: Record<string, unknown> = {
      amount: '1',
      from: from,
      to: to,
    };

    const response = await instance.get<T>(url, { params });

    return response.data;
  },
};
