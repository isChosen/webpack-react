/*
 * @Author: Chosen
 * @Date: 2019-06-12 21:15:25
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-13 23:43:32
 * @Decription: Global Reducer
 */

import { fromJS } from 'immutable';
import {
  INIT, CHANGE_FIELD2, SHOW_RELOGIN_MODAL, GOTO_LOGIN, RESET_RELOGIN_FLAG2_FALSE
} from './actionTypes';

const initState = fromJS({
  field1: '初始化字段1',
  field2: '初始化字段2',
  field3: true
});

const initialReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case INIT: {
      const { example1 } = action;
      return state.set('field1', fromJS(example1));
    }
    case CHANGE_FIELD2: {
      const { example2 } = action;
      return state.set('field1', fromJS(example2));
    }
    default: return state;
  }
};

const initRducer = {
  init: initialReducer
};

export default initRducer;
