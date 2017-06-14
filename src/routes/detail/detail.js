import React from 'react';
import {connect} from 'dva';
import {Carousel, WhiteSpace} from 'antd-mobile';
import PropTypes from 'prop-types';
import Banner from '../../components/Banner/';
import Stepper from '../../components/Stepper/';
import foodList from '../../mock/foodList';
import Cart from '../../components/Cart/';
import style from './index.less';

@connect((state) => {
  return {cart: state.list.cart}
})
class Detail extends React.Component {
  static propTypes = {
    cart: PropTypes.array
  }

  static defaultProps = {
    number: 0
  }

  constructor(props) {
    super(props);

  }
  componentDidMount() {}

  handleChange = (item, value) => {
    let {dispatch} = this.props;

    dispatch({
      type: 'list/changeCart',
      payload: {
        ...item,
        quantity: value
      }
    })
  }

  handleClearAll = () => {
    let {dispatch} = this.props;

    dispatch({type: 'list/clearAll'})
  }

  handleToOrder = () => {
    let {history} = this.props;
    history.push('/checkout')
    console.log('toOrder')
  }
  render() {
    const {location, params, cart, number, history} = this.props;
    const curCartItem = cart.find(item => item.id === params.id);
    const detailItem = {
      id: '635306642',
      name: "王道椒香鸡腿",
      price: 11,
      descripiton: '我是一条描述信息1',
      tag: ['新品'],
      pic: ''
    }

    let curItem = curCartItem
      ? curCartItem
      : detailItem

    const defaultNumber = curItem && curItem.quantity
      ? curItem.quantity
      : number;

    let cartProps = {
      cart,
      clearAll: this.handleClearAll,
      handleChange: this.handleChange,
      toOrder: this.handleToOrder
    }
    return (
      <div className={style['detail-container']}>
        <Banner/>
        <div className={style['detail-info']}>
          <h3>蜜枣白和南瓜</h3>
          <p className={style['detail-description']}>渝信毛血旺渝信毛血旺渝信毛血旺渝信毛血旺</p>
          <div className={style['detail-price']}>￥15</div>
        </div>
        <div className={style['detail-body']}>
          <div className={style['detail-number']}>
            <span>数量选择</span>
            <Stepper
              defaultValue={defaultNumber}
              onChange={this.handleChange.bind(this, curItem)}/>
          </div>
          <div className={style['detail-food']}>
            <h4>食材</h4>
            <p>主料：卡是快乐打卡了收到</p>
            <p>主料：卡是快乐打卡了收到</p>
            <p>主料：卡是快乐打卡了收到</p>
            <p>主料：卡是快乐打卡了收到</p>
            <WhiteSpace size='md'/>
            <h4>每份所含营养</h4>
            <p>主料：卡是快乐打卡了收到</p>
            <p>主料：卡是快乐打卡了收到</p>
            <p>主料：卡是快乐打卡了收到</p>
            <p>主料：卡是快乐打卡了收到</p>
            <WhiteSpace size='md'/>
          </div>
        </div>
        <Cart {...cartProps}/>
      </div>
    );
  }

}

Detail.propTypes = {};

export default Detail;
