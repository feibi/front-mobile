import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {Popup, List, Icon} from 'antd-mobile';
import Stepper from '../Stepper/'
import style from './style/index.less'
const trashIcon = require('!svg-sprite!./style/trash.svg');

class PopupContent extends React.Component {
  static propTypes = {
    cart: PropTypes.array,
    handleChange: PropTypes.func,
    clearAll: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      cart: props.cart
    };
  }

  handleChange = (item, value) => {
    let {cart} = this.state;
    let {dispatch, handleChange, onClose} = this.props;
    let storeCart = cart || [];
    let findIndex = storeCart.findIndex(_item => _item.id === item.id);

    if (value === 0) {
      storeCart.splice(findIndex, 1)
    } else {
      storeCart[findIndex] = {
        ...item,
        quantity: parseInt(value)
      }
    }
    if (storeCart.length === 0) {
      onClose()
    }
    this.setState({storeCart})
    handleChange(item, value)
  }

  clearAll = () => {
    let {clearAll, onClose} = this.props;
    this.setState({cart: []})
    clearAll && clearAll()
    onClose()
  }

  render() {
    let {cart} = this.state;
    return (
      <List
        renderHeader={() => (
        <div className={style['popup-title']}>
          <span>菜单</span>
          <div
            className={style['clear-btn']}
            onClick={this.clearAll}>
            <Icon type={trashIcon}/>清空购物车</div>
        </div>
      )}>
        {cart.map((item, index) => {
          return (
            <List.Item key={item.id}>
              <div className={style['cart-list']}>
                <span className={style['cart-list__title']}>{item.name}</span>
                <span className={style['cart-list__price']}>{'￥' + item.price}</span>
                <span className={style['cart-list__number']}><Stepper
                  onChange={this.handleChange.bind(this, item)}
                  defaultValue={item.quantity}/></span>
              </div>
            </List.Item>
          )
        })}
      </List>
    );
  }
}

export default PopupContent
