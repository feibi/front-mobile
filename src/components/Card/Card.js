import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd-mobile';
import style from './index.less'
const Card = ({}) => {
  return (
    <div className={style['card']}>
      <div className={style['card-header']}>
        <div className={style['card-header__name']}>
          <span className={style['card-pic']}></span>
          <span className={style['card-title']}>蒸的有味道（五角场店）</span>
        </div>
        <div className={style['card-status']}>
          订单完成
        </div>
      </div>
      <div className={style['card-body']}>
        <div className={style['card-list']}>
          <ul>
            <li>
              <span>豆豉顶排骨+炎黄水蛋套餐</span>
              <span>x2</span>
            </li>
          </ul>
        </div>
        <p>共3件商品,实付￥26</p>
      </div>
      <div className={style['card-footer']}>
        <Button
          className={style['btn']}
          type="primary">再来一单</Button>
        <Button className={style['btn']}>支付</Button>
      </div>
    </div>
  );
}

Card.propTypes = {};

export default Card;
