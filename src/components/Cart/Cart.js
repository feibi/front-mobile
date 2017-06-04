import React from 'react';
import PropTypes from 'prop-types';
import {Badge, Popup} from 'antd-mobile';
import style from './style/index.less'
import classNames from 'classnames/bind';

import PopupContent from './PopupContent'
let cx = classNames.bind(style);

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
    handleChange: PropTypes.func
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
    let {cart} = this.props;
    //    let total = this.handleCartTotal()

    let cartBtn = cx({'cart-btn': true, 'cart-btn__disabled': true})
    return (
      <div className={style['cart-wrap']}>
        <div className={style['cart']}>
          <div
            className={style['cart-icon__wrap']}
            onClick={this.showCartList}>
            <Badge text={this.handleNumber()}>
              <span className={style['cart-icon']}></span>
            </Badge>
          </div>
          <div className="cart-info">
            {cart.length > 0 && (
              <span>{'￥' + this.handleCartTotal()}</span>
            )}
            <div>配送费 ￥5</div>
          </div>
          <div className={cartBtn}>
            去结算
          </div>
        </div>
      </div>
    )
  }
}

export default Cart
