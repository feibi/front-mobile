import React from 'react';
import {Router, Route, IndexRoute} from 'dva/router';
import IndexPage from './routes/indexPage';
import App from './routes/app';
import Order from './routes/order'
import Detail from './routes/detail'

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}
function RouterConfig({history, app}) {
  return (
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={IndexPage} />
        <Route path='/detail' component={Detail}/>
      </Route>
    </Router>)
}

export default RouterConfig;
