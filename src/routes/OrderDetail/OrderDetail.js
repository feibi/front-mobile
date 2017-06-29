import React from 'react';
import PropTypes from 'prop-types';
import OrderInfo from '../../components/Order';
import style from './index.less';

const OrderDetail = ({history}) => {

  function _handleToVoucher() {
    history.push('/voucher');
  }

  return (
    <div>
      <div className={style['detail-container']}>
        <div className={style['detail-title']}>
          外卖订单详情
        </div>
        <OrderInfo handleToVoucher={_handleToVoucher}/>
        <div className={style['detail-title']}>
          配送信息
        </div>
        <div className={style['info-section']}>
          <div className={style['info-item']}>
            <div className={style['info-item__label']}>
              配送地址
            </div>
            <div className={style['info-item__content']}>
              大熊先生 17792565485
              <p>上海市浦东区西藏南路中山大楼15楼 16F</p>
            </div>
          </div>
          <div className={style['info-item']}>
            <div className={style['info-item__label']}>
              配送服务
            </div>
            <div className={style['info-item__content']}>
              由达达快递提供
            </div>
          </div>
        </div>
        <div className={style['detail-title']}>
          订单信息
        </div>
        <div className={style['info-section']}>
          <div className={style['info-item']}>
            <div className={style['info-item__label']}>
              订单号码
            </div>
            <div className={style['info-item__content']}>
              201705318888
            </div>
          </div>
          <div className={style['info-item']}>
            <div className={style['info-item__label']}>
              订单时间
            </div>
            <div className={style['info-item__content']}>
              2017-5-31
            </div>
          </div>
          <div className={style['info-item']}>
            <div className={style['info-item__label']}>
              支付方式
            </div>
            <div className={style['info-item__content']}>
              支付宝支付
            </div>
          </div>
          <div className={style['info-item']}>
            <div className={style['info-item__label']}>
              订单备注
            </div>
            <div className={style['info-item__content']}>
              到楼下打电话
            </div>
          </div>
        </div>
      </div>
      <div className={style['fix-btn']}>
        再来一单
      </div>
    </div>
  );
}

OrderDetail.propTypes = {};

export default OrderDetail;
