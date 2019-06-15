/*
 * @Author: Chosen
 * @Date: 2019-06-12 23:11:58
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-12 23:19:23
 * @Decription: Sidebar reducer
 */

import { fromJS } from 'immutable';

const sidebarState = fromJS({
  sidebarData: [
    {
      name: 'Home',
      linkto: 'home'
    },
    {
      name: 'product',
      linkto: 'Product'
    },
    {
      name: 'about',
      linkto: 'About'
    }
  ]
});

const reducer = (state = sidebarState, action) => state;

export { reducer };
