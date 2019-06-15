import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import store, { injectReducer } from '@store';
import { GOTO_LOGIN } from '@store/actionTypes';
import { Redirect, withRouter } from 'react-router-dom';
import { reducer } from './reducer';

// 动态注入组件的 Reducer
injectReducer(store, { key: 'responseInterc', reducer });

class ResponseInterc extends Component {
  constructor(props) {
    super(props);
    this.handleReLogin = this.handleReLogin.bind(this);
  }

  handleReLogin() {
    const { gotoReLogin } = this.props;
    gotoReLogin(true, false);
  }

  shouldComponentUpdate(nextProps) {
    const { isGotoLogin, showReloginModal } = this.props;
    const { isGotoLogin: nextIsGotoLogin, showReloginModal: nextShowReloginModal } = nextProps;
    if (!(isGotoLogin === nextIsGotoLogin && showReloginModal === nextShowReloginModal)) return true;
    return false;
  }

  render() {
    const { reLoginMsg, isGotoLogin, showReloginModal } = this.props;
    return (
      <Fragment>
        {
          showReloginModal ? (
            <div
              style={{
                width: 300,
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: '1px solid #ccc',
                index: 100,
                borderRadius: 4
              }}
            >
              <h5>{ reLoginMsg }</h5>
              <button type="button" onClick={this.handleReLogin}>确定</button>
            </div>
          ) : null
        }
        { isGotoLogin && <Redirect to="/login" /> }
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  reLoginMsg: state.getIn(['responseInterc', 'reLoginMsg']),
  isGotoLogin: state.getIn(['responseInterc', 'isGotoLogin']),
  showReloginModal: state.getIn(['responseInterc', 'showReloginModal'])
});

const mapDispatchToProps = dispatch => ({
  gotoReLogin(isGotoLogin, showReloginModal) {
    dispatch({
      isGotoLogin,
      showReloginModal,
      type: GOTO_LOGIN
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResponseInterc));
