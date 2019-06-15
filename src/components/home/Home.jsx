/*
 * @Author: Chosen
 * @Date: 2019-05-27 22:16:24
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-13 00:09:45
 * @Decription:
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { INIT } from '@store/actionTypes';
import { isEqual } from 'lodash';
import cover from '@image/cover.jpg';
import less from './home.less';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.handleClick = this.handleClick.bind(this);
    this.updateGlobalField1 = this.updateGlobalField1.bind(this);
    // this.passfn = this.passfn.bind(this);
  }

  handleClick(argv) {
    // console.log('click event', argv);
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  passfn(argv) {
    console.log('passfn: ', argv);
  }

  // 修改全局样式
  updateGlobalField1() {
    const { fn1 } = this.props;
    fn1({ type: INIT, example1: '这是来自 Home 组件的数据' });
  }

  render() {
    console.log('this.props: ', this.props);
    const { isToggleOn } = this.state;
    // console.log('lodash: ', isEqual);
    return (
      <div>
        <h3>Home Component</h3>
        <img alt="asdf" src={cover} style={{ width: 300, hegiht: 'auto' }} />
        <div className={less.testBk}>测试图片背景</div>
        <Button onClick={() => this.handleClick(1, 2, 3)}>
          {isToggleOn ? 'ON' : 'OFF'}
        </Button>
        <br />
        <br />
        <Button onClick={this.updateGlobalField1}>修改Global-state</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  field1: state.getIn(['init', 'field1'])
});

const mapDispatchToProps = dispatch => ({
  fn1(argv) {
    dispatch(argv);
  },
  fn2(argv) {
    dispatch(argv);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
