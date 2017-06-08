import React from 'react';
import PropTypes from 'prop-types';
import {List, WingBlank, WhiteSpace} from 'antd-mobile';
import style from './index.less';
const Item = List.Item;
const Brief = Item.Brief;

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <WingBlank size="md">
          <WhiteSpace size="md"/>
          <List className="my-list">
            <Item
              arrow="horizontal"
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              multipleLine
              onClick={() => {}}>
              上海市黄浦区西藏南路中山大楼15楼16F
              <Brief>大熊先生
                <span>17721456213</span>
              </Brief>
            </Item>
            <Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png">
              立即送出
            </Item>
          </List>
          <WhiteSpace size="md"/>
          <section className={style['cart-section']}>
            <h3>
              <span>s</span>蒸的有味道</h3>
            <ul>
              <li>
                <div className={style['cart-pic']}>
                  <img/>
                </div>
                <div className={style['cart-content']}>
                  <div>
                    <p>香菇睡了鸡</p>
                    <span>x3</span>
                  </div>
                  <div className={style['cart-price']}>
                    ￥88.00
                  </div>
                </div>
              </li>
            </ul>
            <div className={style['cart-entry']}>
              <div className={style['cart-entry__item']}>
                <span>满减优惠</span>
                <span>-￥32.00</span>
              </div>
              <div className={style['cart-entry__item']}>
                <span>满减优惠</span>
                <span>-￥32.00</span>
              </div>
            </div>
            <div className={style['cart-entry']}>
              <div className={style['cart-entry__item']}>
                <span>满减优惠</span>
                <span>-￥32.00</span>
              </div>
              <div className={style['cart-entry__item']}>
                <span>满减优惠</span>
                <span>-￥32.00</span>
              </div>
            </div>
            <div className={style['cart-pay-info']}>
              总计￥232.00 优惠￥32.00 实付 ￥200.00
            </div>
          </section>
        </WingBlank>

      </div>
    )
  }
}

export default Checkout
