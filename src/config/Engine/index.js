import axios from 'axios';
import { objectString } from '@/utils/General';

const req = axios.create({
  // eslint-disable-next-line no-undef
  // baseURL: 'https://jsonplaceholder.typicode.com/',
  baseURL: import.meta.env.VITE_BASE_URL,
});

// req.interceptors.request.use(
//   async (config) => {
//     await getData('token').then((res) => {
//       if (res && config.url !== '') {
//         return (config.headers['Authorization'] = 'Bearer ' + res.replace(/\\"|\\/g, ''));
//       }
//     });
//
//     config.headers['Content-Type'] = 'application/json';
//     config.headers['Accept'] = 'application/json';
//
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
//
// req.interceptors.response.use(
//   (response) => {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   },
//   async (err) => {
//     const error = err.response;
//
//     if (error.status === 401 && err.config && !err.config._retry) {
//       await getData('refresh_token').then(async (res) => {
//         await req
//           .post('', {
//             refresh_token: res.replace(/\\"|\\/g, ''),
//           })
//           .then((newData) => {
//             removeData('refresh_token');
//             storeData('token', newData.data.data.jwt_token).then(() => {
//               storeData('refresh_token', newData.data.data.refresh_token).then(() => {
//                 err.config._retry = true;
//                 return req.request({
//                   method: error.config.method,
//                   headers: {
//                     Authorization: getData('token').then((newResponse) => {
//                       return 'Bearer ' + newResponse.replace(/\\"|\\/g, '');
//                     }),
//                   },
//                   url: error.config.url,
//                   params: error.config.params,
//                 });
//               });
//             });
//           })
//           .catch(() => {
//             store.dispatch(setAuthExpired(true));
//           });
//       });
//     }
//
//     return Promise.reject(error);
//   },
// );

export const requestPost = (url, params) => {
  return new Promise((resolve, reject) => {
    req
      .post(`${url}`, params)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestGet = (url, params) => {
  return new Promise((resolve, reject) => {
    req
      .get(`${url}${params ? params : ''}`)
      .then((response) => {
        resolve(response.data);
        console.log("RESPONSE ",response.data)
        console.log('URL ', url);
        console.log('PARAM CONFIG', params);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestPut = (url, params, body) => {
  return new Promise((resolve, reject) => {
    req
      .put(`${url}${params ? objectString(params) : ''}`, body)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestDelete = (url, body) => {
  return new Promise((resolve, reject) => {
    req
      .delete(`${url}`, {
        data: body,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestAnyGet = (url, params, headers) => {
  return new Promise((resolve, reject) => {
    req
      .get(
        `${url}${objectString(params)}`,
        headers && {
          headers: headers,
        },
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const requestPostMultipart = (url, params, headers) => {
  return new Promise((resolve, reject) => {
    req
      .post(
        `${url}`,
        params,
        headers && {
          headers: headers,
        },
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
