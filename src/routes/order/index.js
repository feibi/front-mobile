import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Drawer, List, NavBar, Button, WhiteSpace} from 'antd-mobile';
import Swiper from '../../components/Swiper';
import style from './index.less'
class Order extends React.Component {
  state = {
    show: false
  }
  onClick = (d) => {
    this.setState({
      show: !this.state.show
    })
  }
  _handleBack = () => {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return (
      <div>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <WhiteSpace/>
        <Button onClick={this.onClick}>点击</Button>
        <WhiteSpace/>
        <WhiteSpace/>
        <Swiper show={this.state.show}>
          <NavBar
            mode="light"
            onLeftClick={this._handleBack}>蒸的有味道</NavBar>
        </Swiper>
      </div>
    );
  }
}

export default Order
