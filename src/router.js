import React from 'react';
import {applyRouterMiddleware, Router, Route, IndexRoute} from 'dva/router';
import {useScroll} from 'react-router-scroll';
import List from './routes/list';
import Layout from './components/Layout/';
import Order from './routes/order'
import Detail from './routes/detail'
import Checkout from './routes/checkout'
import Remark from './routes/remark'
import Pay from './routes/pay'
import Address from './routes/address'
import Add from './routes/address/Add'
import Voucher from './routes/voucher'
import OrderDetail from './routes/orderDetail'
import Evaluate from './routes/evaluate'
const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}
function RouterConfig({history, app}) {
  return (
    <Router history={history} render={applyRouterMiddleware(useScroll())}>
      <Route path='/' component={Layout}>
        <IndexRoute component={List}/>
        <Route path='list' component={List}/>
        <Route path='detail/:id' component={Detail}/>
        <Route path='checkout' component={Checkout}/>
        <Route path='remark' component={Remark}/>
        <Route path='order' component={Order}/>
        <Route path='pay' component={Pay}/>
        <Route path='address' component={Address}/>
        <Route path='add' component={Add}/>
        <Route path='voucher' component={Voucher}/>
        <Route path='orderdetail/:id' component={OrderDetail}/>
        <Route path='evaluate' component={Evaluate}/>
      </Route>
    </Router>
  )
}

export default RouterConfig;
