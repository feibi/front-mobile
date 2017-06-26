import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  WingBlank,
  WhiteSpace,
  NavBar,
  TextareaItem,
  Icon
} from 'antd-mobile';
import Swiper from '../../components/Swiper';
import OrderInfo from '../../components/Order'
import style from './index.less';
const reduceIcon = require('!svg-sprite!../../svg/jian.svg');
const locationIcon = require('!svg-sprite!../../svg/location.svg');
const timeIcon = require('!svg-sprite!../../svg/time.svg');
const Item = List.Item;
const Brief = Item.Brief;

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRemark: false
    };
  }

  handleRemark = () => {
    // this.setState({   showRemark:
    // !this.state.showRemark })
    this.props.history.push('/remark')
    console.log('remark')
  }

  _handleBack = () => {
    this.setState({
      showRemark: !this.state.showRemark
    })
  }

  _submitOrder = () => {
    this.props.history.push('/pay')
  }

  _handleToAddress = () => {
    this.props.history.push('/address')
  }

  _handleToVoucher = () => {
    this.props.history.push('/voucher')
  }

  render() {
    return (
      <div className={style['order-container']}>
        <WingBlank size="md">
          <WhiteSpace size="md"/>
          <List className="my-list">
            <Item
              arrow="horizontal"
              thumb={(
              <span className={style['icon-location']}><Icon type={locationIcon}/></span>
            )}
              multipleLine
              onClick={this._handleToAddress}>
              上海市黄浦区西藏南路中山大楼15楼16F
              <Brief>大熊先生
                <span>17721456213</span>
              </Brief>
            </Item>
            <Item
              thumb={(
              <span className={style['icon-time']}><Icon type={timeIcon}/></span>
            )}>
              立即送出
            </Item>
          </List>
          <WhiteSpace size="md"/>
          <OrderInfo
            handleToVoucher={this._handleToVoucher}/>
          <WhiteSpace size="md"/>
          <List className="my-list">
            <Item
              arrow="horizontal"
              onClick={this.handleRemark}>填写备注</Item>
          </List>
          <WhiteSpace size="md"/>
        </WingBlank>
        <div className={style["order-pay__bar"]}>
          <div className={style['order-pay__info']}>
            <span>已优惠32元</span>
            <span>待支付
              <i>￥200</i>
            </span>
          </div>
          <span
            className={style['btn-submit']}
            onClick={this._submitOrder}>提交订单</span>
        </div>
      </div>
    )
  }
}

export default Checkout
