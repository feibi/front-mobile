import React from 'react';
import {
  List,
  WingBlank,
  WhiteSpace,
  Radio,
  NavBar,
  TextareaItem
} from 'antd-mobile';
const RadioItem = Radio.RadioItem;
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
        label: '微信支付'
      }, {
        value: 1,
        label: '支付宝支付'
      }, {
        value: 2,
        label: '银行卡支付'
      }, {
        value: 3,
        label: '会员卡支付'
      }
    ];
    let {value} = this.state
    return (
      <div>
        <WhiteSpace/>
        <List>
          {data.map(i => (
            <RadioItem
              key={i.value}
              checked={value === i.value}
              onChange={() => this.onChange(i.value)}>
              {i.label}
            </RadioItem>
          ))}
        </List>
      </div>
    );
  }
}

Pay.propTypes = {};

export default Pay;
