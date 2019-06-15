/*
 * @Author: Chosen
 * @Date: 2019-06-06 19:34:00
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-15 17:51:01
 * @Decription: GET => params, POST => data
 */

import qs from 'qs';
import axios from './http';

let aiRobot;

switch (process.env.NODE_ENV) {
  case 'pre':
    aiRobot = 'pre-release';
    break;
  case 'pro':
    aiRobot = 'pro-official';
    break;
  default:
    aiRobot = 'inner-test';
}

export const fetchBrands = params => axios({
  url: '/api/getBrands',
  method: 'get',
  params
});

export const fetchANumber = data => axios({
  url: '/api/getNumber',
  method: 'post',
  data: qs.stringify(data)
});

// 获取某个机器人
export const fetchRobot = params => axios({
  url: `/ai/v4/robot/${aiRobot}/getDeviceList`,
  method: 'get',
  params
});

// local-mock devserver-before
export const fetchabc = params => axios({
  url: '/api/v3/example2',
  method: 'get',
  params
});

// local-mock devserver-bypass
export const fetchBypass = params => axios({
  url: '/api/v4/example1.json',
  method: 'get',
  params
});

// 登录
export const submit = params => axios({
  url: 'http://localhost:8024/api/v3/login',
  method: 'get',
  params
});

// 登录状态
export const certified = params => axios({
  url: '/api/v3/certified',
  method: 'get',
  params
});

// 获取一个用户信息
export const fetchUser = data => axios({
  url: '/api/vv5/user/user.json',
  method: 'post',
  data
});
