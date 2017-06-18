import React from 'react';
import {
  List,
  WingBlank,
  WhiteSpace,
  Radio,
  Icon,
  Button,
  NavBar,
  TextareaItem
} from 'antd-mobile';
import style from './index.less';
const RadioItem = Radio.RadioItem;
const weixinIcon = require('!svg-sprite!../../svg/weixin.svg');
const aliPayIcon = require('!svg-sprite!../../svg/alipay.svg');
const yinlianIcon = require('!svg-sprite!../../svg/yinlian.svg');

class Pay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  onChange = (value) => {
    this.setState({value});
  }
  render() {
    const data = [
      {
        value: 0,
        label: '微信支付',
        icon: weixinIcon
      }, {
        value: 1,
        label: '支付宝支付',
        icon: aliPayIcon
      }, {
        value: 2,
        label: '银行卡支付',
        icon: yinlianIcon
      }
    ];
    let {value} = this.state
    return (
      <div>
        <WhiteSpace/>
        <WingBlank  size="md">
          <List>
            {data.map(i => (
              <RadioItem
                key={i.value}
                checked={value === i.value}
                onChange={() => this.onChange(i.value)}>
                <div className={style['pay-item']}>
                  <span className={style['pay-item__icon']}><Icon type={i.icon}/></span>
                  <span>{i.label}</span>
                </div>
              </RadioItem>
            ))}
          </List>
          <WhiteSpace/>
          <Button
            className={style['btn-pay']}
            type="primary">确认支付</Button>
        </WingBlank>
      </div>
    );
  }
}

Pay.propTypes = {};

export default Pay;
