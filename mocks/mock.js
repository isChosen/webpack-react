/*
 * @Author: Chosen
 * @Date: 2019-06-10 21:19:55
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-12 21:44:38
 * @Decription:
 */

const example2 = require('./data/example2.json');

// 返回 min <= random:int <= max
const makeRadom = (min, max) => {
  const choice = max - min + 1;
  return Math.floor(Math.random() * choice + min);
};

const Mock = app => {
  // example-1
  app.get('/api/v3/example1', (req, res) => {
    const { query } = req;
    console.log('mock get: ', query);
    res.json({ code: 0, data: 123456 });
  });

  // example-2
  app.get('/api/v3/example2', (req, res) => {
    const { query } = req;
    console.log('mock get: ', query);
    res.json(example2);
  });

  // 登录状态接口
  app.get('/api/v3/certified', (req, res) => {
    const arr = [true, true, true];
    const len = arr.length;
    const index = Math.floor(Math.random() * len);
    console.log('random: ', index);
    const bool = arr[index];
    res.json({
      code: 0,
      data: { status: bool }
    });
  });

  // 登录接口
  app.get('/api/v3/login', (req, res) => {
    const number = makeRadom(0, 1);
    res.json({
      code: 0,
      data: { number: 1 }
    });
  });
};

module.exports = Mock;
