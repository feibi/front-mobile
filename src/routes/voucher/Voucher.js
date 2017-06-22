import React from 'react';
import {Icon} from 'antd-mobile';
import style from './index.less';
const voucherIcon = require('!svg-sprite!../../svg/quan.svg');

const Voucher = ({}) => {
  return (
    <div>
      <div className={style['voucher-none']}>
        <div>
          <Icon type={voucherIcon}/>
          <p>还没有相关的卡券</p>
        </div>
      </div>
    </div>
  );
}

Voucher.propTypes = {};

export default Voucher;
