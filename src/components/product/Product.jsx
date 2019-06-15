/*
 * @Author: Chosen
 * @Date: 2019-06-14 23:32:00
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-15 14:34:54
 * @Description:
 */

import React, { Component } from 'react';
import {
  fetchBrands, fetchANumber, fetchabc, fetchBypass, fetchUser
} from '@util/request';
import { Button } from 'antd';
import CatchError from '../common/ErrorBoundary';


class Product extends Component {
  componentDidMount() {
    fetchabc({ a: 1, b: true, c: '12asdf' })
      .then(result => {
        // console.log('fetchabc: ', result);
      })
      .catch(reason => {
        console.log('fetchabc: ', reason);
      });
  }

  handleFetchBrands() {
    fetchBrands({ a: 1, b: 2 })
      .then(result => {
        console.log('fetchBrands: ', result);
      })
      .catch(reason => {
        console.log('fetchBrands: ', reason);
      });
  }

  handleFetchANumber() {
    fetchANumber({ order: 6, number: 200 })
      .then(result => {
        console.log('fetchANumber: ', result);
      })
      .catch(reason => {
        console.log('fetchANumber: ', reason);
      });
  }

  async handleFetchBypass() {
    /* fetchBypass({ aaa: 1, bagasdf: 'pasfdopap' })
      .then(result => {
        console.log('fetchBypass: ', result);
      })
      .catch(reason => {
        console.log('fetchBypass: ', reason);
      }); */

    const result = await fetchBypass({ aaa: 1, bagasdf: 'pasfdopap' });
    console.log('fetchBypass: ', result);
  }

  handleFetchUser() {
    fetchUser()
      .then(result => {
        console.log('fetchUser: ', result);
      })
      .catch(reason => {
        console.log('fetchUser: ', reason);
      });
  }

  render() {
    console.log('product render');
    return (
      <div>
        <h3>Product Component</h3>
        <Button type="primary" onClick={this.handleFetchBrands}>
          获取品牌
        </Button>
        <br />
        <Button onClick={this.handleFetchANumber}>获取随机数</Button>
        <br />
        <br />
        <Button onClick={this.handleFetchBypass}>Bypass</Button>
        <br />
        <br />
        <Button onClick={this.handleFetchUser}>User: 测试拦截器</Button>
      </div>
    );
  }
}

export default CatchError(Product);
