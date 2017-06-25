import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {Badge, Popup,Icon} from 'antd-mobile';
import style from './style/index.less'
import classNames from 'classnames/bind';

import PopupContent from './PopupContent'
let cx = classNames.bind(style);
const wanIcon = require('!svg-sprite!../../svg/wan.svg');
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
  // Note: the popup content will not scroll.
  maskProps = {
    onTouchStart: e => e.preventDefault()
  };
}

class Cart extends React.Component {

  static propTypes = {
    cart: PropTypes.array,
    history: PropTypes.object,
    handleChange: PropTypes.func,
    toOrder: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }

  handleCartTotal = () => {
    let {cart} = this.props;
    const total = cart.map(item => parseInt(item.price) * item.quantity).reduce((preValue, curValue) => {
      return preValue + curValue
    }, 0)
    return total
  }

  handleNumber = () => {
    let {cart} = this.props;
    const number = cart.map(item => item.quantity).reduce((preValue, curValue) => {
      return preValue + curValue
    }, 0)
    return number
  }

  onMaskClose = () => {
    console.log('onMaskClose');
  };
  showCartList = (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    let {cart} = this.props;
    let cartProps = {
      cart,
      clearAll: this.handleClearAll,
      handleChange: this.handleChange,
      toOrder: this.handleToOrder
    }
    if (this.state.isShow) {
      return
    }

    if (cart.length > 0) {
      this.setState({isShow: true})
      cart.length > 0 && Popup.show(
        <PopupContent
        {...this.props}
        onClose={this.closeCartList}/>, {
        onMaskClose: this.closeCartList,
        animationType: 'slide-up',
        //maskProps
      });
    } else {
      this.setState({isShow: false})
    }

  }

  closeCartList = () => {
    this.setState({
      isShow: false
    }, () => {
      Popup.hide()
    })
  }

  render() {
    let {cart, toOrder} = this.props;
    let enabledToOrder = cart.length > 0
      ? true
      : false;
    let cartBtn = cx({
      'cart-btn': true,
      'cart-btn__disabled': !enabledToOrder
    })

    return (
      <div
        id='cart'
        className={style['cart-wrap']}>
        <div className={style['cart']}>
          <div
            className={style['cart-icon__wrap']}
            onClick={this.showCartList}>
            <Badge text={this.handleNumber()}>
              <Icon type={wanIcon}/>
              {/* <span className={style['cart-icon']}></span> */}
            </Badge>
          </div>
          <div className="cart-info">
            {cart.length > 0 && (
              <span>{'￥' + this.handleCartTotal()}</span>
            )}
            <div>配送费 ￥5</div>
          </div>
          <div
            className={cartBtn}
            onClick={() => enabledToOrder
            ? toOrder()
            : false}>
            去结算
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
