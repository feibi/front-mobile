import React from 'react';
import {applyRouterMiddleware, Router, Route, IndexRoute} from 'dva/router';
import {useScroll} from 'react-router-scroll';
import List from './routes/list';
import Layout from './components/Layout/';
import Order from './routes/order'
import Detail from './routes/detail'
import Checkout from './routes/checkout'

const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}
function RouterConfig({history, app}) {
  return (
    <Router
      history={history}
      render={applyRouterMiddleware(useScroll())}>
      <Route path='/' component={Layout}>
        <IndexRoute component={List}/>
        <Route path='list' component={List}/>
        <Route path='detail/:id' component={Detail}/> {/* <Route component={Wrap}>  </Route> */}
        <Route path='checkout' component={Checkout}/>
        <Route path='order' component={Order}/>
      </Route>
    </Router>
  )
}

export default RouterConfig;
