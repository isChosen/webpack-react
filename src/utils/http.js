/*
 * @Author: Chosen
 * @Date: 2019-06-06 19:29:29
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-13 23:29:03
 * @Decription: Interceptor
 */

import axios from 'axios';
import store from '@store';
import { SHOW_RELOGIN_MODAL } from '@store/actionTypes';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Add a response interceptor
axios.interceptors.response.use(
  response => {
    const { data, data: { code: statusCode, msg } } = response;
    if (statusCode === 1010101010) {
      const { dispatch } = store;
      console.log('登录超时');
      dispatch({ type: SHOW_RELOGIN_MODAL, bool: true, msg });
    }
    return data;
  },
  error => Promise.reject(error)
);

export default axios;
