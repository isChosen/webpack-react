* 命令解释
  * <code>dll:dev</code> 把 react/react-router 编译成动态链接库文件，代码没压缩，用于开发调试时，提示/报错信息更友好
  * <code>dll:pro</code> 把 react/react-router 编译成动态链接库文件，代码已压缩，用于提交打包发布
  * <code>start:dev</code> 启动 <code>webpack-dev-server</code> 【接口代理：测试环境】<span style="color: #d24949">单命令</span>
  * <code>start:pre</code> 启动 <code>webpack-dev-server</code> 【接口代理：预发布环境】，<span style="color: #d24949">单命令</span>
  * <code>start:pro</code> 启动 <code>webpack-dev-server</code> 【接口代理：正式环境】，<span style="color: #d24949">单命令</span>
  * <code>build:dev</code> 打包构建，代码已压缩，脚本文件名为 <code>[chunk-name]</code>，用于模块分析，<span style="color: #d24949">单命令</span>
  * <code>build:pro</code> 打包构建，代码已压缩，脚本文件名为 <code>[chunk-id]</code>，用于生产发布，<span style="color: #d24949">单命令</span>
  * <code>start</code> 启动 <code>webpack-dev-server</code> 【接口代理：测试环境】<span style="color: #d24949">组合命令</span>
  * <code>build</code> 打包构建，默认组合 <code>build:pro</code> 代码已压缩，脚本文件名为 <code>[chunk-id]</code>，<span style="color: #d24949">组合命令</span>
  * <span style="color: #ce8512">* <span style="color: #d24949">单命令</span> 表示：该命令每次都不执行对应的 dll 命令，假设 dll 文件已存在，不存在则网页报错</span>
* 视频中各个点都讲得比较通俗易懂也很详细了（自以为！）还有其他参考资料，这里就不以文字描述了
* 想要了解更多，狠狠戳下面的链接获取视频资源吧~
* 百度网盘资源：[webpack-react](https://pan.baidu.com/s/1zKyz10c9-6UK9NDv2A8hfg) 提取码：45oc
* <span style="color: #1b8ec4;">如果你觉得对你有用，从中收获了知识，不要忘记给我点赞，加星喔！</span>
