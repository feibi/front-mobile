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
import style from './index.less';
const reduceIcon = require('!svg-sprite!../../svg/jian.svg');
const locationIcon = require('!svg-sprite!../../svg/location.svg');
const timeIcon = require('!svg-sprite!../../svg/time.svg');
const Item = List.Item;
const Brief = Item.Brief;

const Order = ({handleToVoucher}) => {

  return (
    <div>
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
            <span>餐盒费</span>
            <span>￥4.00</span>
          </div>
          <div className={style['cart-entry__item']}>
            <span>配送费</span>
            <span>￥4.00</span>
          </div>
        </div>
        <div className={style['cart-discount']}>
          <Item
            extra={< span className = {
            style['cut-price']
          } > -￥32.00 < /span>}
            onClick={() => {}}>
            <p className={style['cut']}>
              <span className={style['icon-reduce']}><Icon type={reduceIcon}/></span>
              <span>满减优惠</span>
            </p>
          </Item>
          <Item
            extra="暂无可用"
            arrow="horizontal"
            onClick={handleToVoucher}>代金券</Item>
        </div>

        <div className={style['cart-pay-info']}>
          <span>总计￥232.00 优惠￥32.00</span>
          <span className={style['final-pay']}>实付
            <i>￥200.00</i>
          </span>
        </div>

      </section>
    </div>
  )
};

Order.propTypes = {};

export default Order;
