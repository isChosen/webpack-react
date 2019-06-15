/*
 * @Author: Chosen
 * @Date: 2019-06-12 21:42:04
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-13 23:21:09
 * @Decription: Action types
 */

// init
export const INIT = 'INIT';
export const CHANGE_FIELD2 = 'CHANGE_FIELD2';

// interceptor
export const GOTO_LOGIN = 'GOTO_LOGIN'; // 转到登录页
export const NEED_TO_RELOGIN = 'NEED_TO_RELOGIN';
export const SHOW_RELOGIN_MODAL = 'SHOW_RELOGIN_MODAL';
export const RESET_RELOGIN_FLAG2_FALSE = 'RESET_RELOGIN_FLAG2_FALSE'; // 重置 拦截器的重新登录 flag
