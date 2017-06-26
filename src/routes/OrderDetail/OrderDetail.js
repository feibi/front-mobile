import React from 'react';
import PropTypes from 'prop-types';
import OrderInfo from '../../components/Order'
const OrderDetail = ({history}) => {

  function _handleToVoucher(){
    history.push('/voucher')
  }

  return (
    <div>
      <OrderInfo handleToVoucher={_handleToVoucher}/>
    </div>
  );
}

OrderDetail.propTypes = {

};

export default OrderDetail;
