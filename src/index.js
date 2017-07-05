import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
//import { message } from 'antd';
// import './index.html';
 import './index.css';

// 1. Initialize
const app = dva({
  history: browserHistory,
});

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(require('./models/detail'));
app.model(require('./models/list'));
app.model(require('./models/checkout'));
app.model(require('./models/order'));
app.model(require('./models/evaluate'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
