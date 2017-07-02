const path = require('path');
const pxtorem = require('postcss-pxtorem');

const svgSpriteDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
  path.resolve(__dirname, 'src/svg/'), // 业务代码本地私有 svg 存放目录
];

export default {
  entry : 'src/index.js',
  disableCSSModules : false,
  // publicPath : "/",
  // outputPath:'./dist/js',
  svgSpriteLoaderDirs : svgSpriteDirs,
  theme : "./theme.config.js",
  //multipage : true,
  env : {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-decorators-legacy',
        'transform-runtime',
        [
          'import', {
            'libraryName': 'antd-mobile',
            'libraryDirectory': 'lib',
            'style': true
          }
        ]
      ],
      extraPostCSSPlugins: [pxtorem({rootValue: 100, propWhiteList: []})]
    },
    production: {
      extraBabelPlugins: [
        'transform-runtime',
        'transform-decorators-legacy',
        [
          'import', {
            'libraryName': 'antd-mobile',
            'libraryDirectory': 'lib',
            'style': true
          }
        ]
      ],
      extraPostCSSPlugins: [pxtorem({rootValue: 100, propWhiteList: []})]
    }
  }
}
