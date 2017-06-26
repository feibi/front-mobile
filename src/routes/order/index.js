import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Tabs, WhiteSpace} from 'antd-mobile';
import Card from '../../components/Card';
import style from './index.less'

const TabPane = Tabs.TabPane;
class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  callback = () => {}
  handleTabClick = () => {}
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          swipeable={false}
          onChange={this.callback}
          onTabClick={this.handleTabClick}>
          <TabPane tab="全部订单" key="1">
            <div>
              <Card/>
              <Card/>
            </div>
          </TabPane>
          <TabPane tab="待评价" key="2">
            <div>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </TabPane>
          <TabPane tab="待支付" key="3">
            <div>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Order
