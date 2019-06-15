/*
 * @Author: Chosen
 * @Date: 2019-06-11 20:54:06
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-14 22:50:13
 * @Decription:
 */

import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { injectReducer } from '@store';
import { reducer } from './reducer';
import less from './sidebar.less';

// 动态注入组件的 Reducer
injectReducer(store, { key: 'sidebar', reducer });

// eslint-disable-next-line react/prefer-stateless-function
class Sidebar extends Component {
  render() {
    const { match: { path }, sidebarData: sidebar } = this.props;
    // console.log('sidebar props: ', this.props);
    return (
      <div className={less.container}>
        <h3>Sidebar</h3>
        {
          sidebar.map(item => {
            const { name, linkto } = item;
            return (
              <div key={linkto}>
                <NavLink activeClassName={less.curr} to={{ pathname: `${path}/${linkto}` }}>{name}</NavLink>
              </div>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sidebarData: state.getIn(['sidebar', 'sidebarData']).toJS()
});


export default connect(mapStateToProps, null)(withRouter(Sidebar));
