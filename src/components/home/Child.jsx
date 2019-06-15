import React, { Component } from 'react';

class Child extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    const { fn: nextFn } = nextProps;
    const { fn } = this.props;
    if (nextFn !== fn) {
      return true;
    }
    return false;
  }

  render() {
    console.log('child render');
    return (
      <div style={{ margin: 10, border: '1px solid #666' }}>
        <h3>我是一个子组件</h3>
      </div>
    );
  }
}

export default Child;
