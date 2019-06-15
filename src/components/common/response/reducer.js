/*
 * @Author: Chosen
 * @Date: 2019-06-12 21:15:25
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-13 23:42:44
 * @Decription: Response Reducer
 */

import { fromJS } from 'immutable';
import { SHOW_RELOGIN_MODAL, GOTO_LOGIN, RESET_RELOGIN_FLAG2_FALSE } from '@store/actionTypes';

const responseState = fromJS({
  isNeedToReLogin: false, // 是否需要登录
  showReloginModal: false, // 是否弹出重新登录的提示框
  reLoginMsg: '', // 重新登录提示信息
  isGotoLogin: false // 跳转到登录页
});

const reducer = (state = responseState, action) => {
  const { type } = action;
  switch (type) {
    case SHOW_RELOGIN_MODAL: {
      const { bool, msg } = action;
      return state.merge({
        showReloginModal: bool,
        reLoginMsg: msg
      });
    }
    case GOTO_LOGIN: {
      const { isGotoLogin, showReloginModal } = action;
      return state.merge({
        isGotoLogin,
        showReloginModal
      });
    }
    case RESET_RELOGIN_FLAG2_FALSE: {
      const { bool } = action;
      return state.set('isGotoLogin', bool);
    }
    default: return state;
  }
};

export { reducer };
