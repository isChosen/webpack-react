/*
 * @Author: Chosen
 * @Date: 2019-06-14 23:24:31
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-14 23:40:54
 * @Description:
 */

import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
    this.handleReload = this.handleReload.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {}

  handleReload() {
    this.setState({ hasError: false });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div
          style={{
            padding: '2em 0',
            textAlign: 'center',
            background: 'transparent'
          }}
        >
          <span
            style={{
              fontSize: 14,
              color: '#3e3e3e'
            }}
          >
            <span>加载失败，点击</span>
            <a onClick={this.handleReload}> 此处 </a>
            <span>重新加载</span>
          </span>
        </div>
      );
    }
    return children;
  }
}

// 高阶函数
const CatchError = Target => (
  props => (
    <ErrorBoundary>
      <Target {...props} />
    </ErrorBoundary>
  )
);

export default CatchError;
