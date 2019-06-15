/*
 * @Author: liangchaoshun
 * @Date: 2019-01-31 11:01:01
 * @Last Modified by: Chosen
 * @Last Modified time: 2019-06-11 23:31:58
 * @Description: Eslint Configuration
 */

module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true
    },
    extends: 'airbnb',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: ['react'],
    parser: 'babel-eslint',
    rules: {
      // value 为 "off" 时，表示禁用
      'no-unused-vars': 'warn', // 变量：声明了但未使用
      'react/no-unused-state': 'warn', // react 生命单位使用的变量
      'no-console': 'warn', // 文中 console.log：可以有
      "no-plusplus": 'off',//允许使用++，--
      indent: ['error', 2, { "SwitchCase": 1 }], // 缩进： 2 个空格
      'linebreak-style': ['off', 'windows'], // 换行：CRLF
      quotes: ['error', 'single'], // 引号：单引号
      semi: ['error', 'always'], // 语句结束：分号
      'comma-dangle': ['error', 'never'], // 尾逗号：不需要
      'arrow-parens': ['error', 'as-needed'], // 箭头函数：一个参数时不需要括号
      'jsx-a11y/anchor-is-valid': 'off', // href：必须为为有效值
      'jsx-a11y/no-static-element-interactions': 'off', // 允许原生标签没有 role 特性
      'jsx-a11y/click-events-have-key-events': 'off', // 允许除了 button 之外的标签绑定事件
      'jsx-quotes': ['error', 'prefer-double'], // jsx 标签属性引号：双引号
      'react/jsx-one-expression-per-line': 'off', // jsx 表达式：每行只能一条表达式
      'react/prefer-stateless-function': 'warn', // 建议改成无状态函数
      'react/prop-types': 'warn', // react props 检测
      'import/no-unresolved': 'off', // 确保导入的模块可以解析为本地文件系统上的模块
      'class-methods-use-this': "off",
      'react/jsx-no-bind': 'off', // 允许 react 标签内使用 bind
      'react/no-did-update-set-state': 'warn', // 允许 componentDidUpdate 使用 setState
      'max-len': ["error", { // 每行代码多大长度
        "code": 150,
        "ignoreComments": true,
        "ignoreTrailingComments": true,
        "ignorePattern": "^.*(src|image)=.+$" // base64 图片
      }],
      'react/sort-comp': 'off', // 组件方法不需要排序
      'no-unused-expressions': ["error", { "allowShortCircuit": true }], // 不常用表达式：允许短路运算符
      'no-param-reassign': 'off', // 对象属性允许改变（直译：允许参数再赋值）
      'no-underscore-dangle': 'off', // 允许标识符带下划线
      'import/prefer-default-export': 'off', // 允许某个文件只有单个 export 导出语句
      'switch-colon-spacing': ["error", { "after": true, "before": false }], // switch 语句冒号前不带空格，其后带一个空格
      'no-shadow': 'off', // 允许内部再定义与外部同名变量
      'react/no-unused-prop-types': 'warn', // react 属性定义了，但未使用
      'react/forbid-prop-types': 'off', // 允许使用 any array object 作为数据类型
      'no-lone-blocks': 'off', // 允许单行花括号，react 常见
      'react/no-array-index-key': 'off', //使用index做为key值
      'no-nested-ternary': 'off',
      'object-curly-newline': [ // 对象字面量 和 import 以及 export 语句的换行方式
        'error',
        {
          ObjectPattern: { multiline: true, minProperties: 5 },
          ImportDeclaration: { multiline: true, minProperties: 5 },
          ExportDeclaration: { multiline: true, minProperties: 5 }
        }
      ],
      'react/jsx-wrap-multilines': [ // jsx 标签在几种情况下的换行方式
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'ignore'
        }
      ]
    }
  };
  