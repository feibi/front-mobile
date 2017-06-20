import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  WingBlank,
  WhiteSpace,
  NavBar,
  TextareaItem,
  Radio,
  Icon
} from 'antd-mobile';
import style from './index.less'
const Item = List.Item;
const RadioItem = Radio.RadioItem;
class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }
  onChange = (value) => {
    console.log('checkbox');
    this.setState({value});
  }
  render() {
    const {value} = this.state;
    const data = [
      {
        value: 0,
        label: '上海市静安区',
        name: '大熊',
        telephone: '13745874563'
      }, {
        value: 1,
        label: '上海市徐汇区',
        name: '小熊',
        telephone: '13845874563'
      }, {
        value: 3,
        label: '上海市黄浦区',
        name: '二狗',
        telephone: '17745874563'
      }
    ];
    return (
      <div>
        <WingBlank size="md">
          <WhiteSpace size="md"/>
          <List>
            {data.map(i => (
              <RadioItem
                key={i.value}
                checked={value === i.value}
                onChange={() => this.onChange(i.value)}>
                <p>{i.label}</p>
                <div>
                  <span>{i.name}</span>
                  <span>{i.telephone}</span>
                </div>
              </RadioItem>
            ))}
          </List>
        </WingBlank>
        <div className={style['add-btn']}>
          新增收货地址
        </div>
      </div>
    )
  }
}

export default Address;
