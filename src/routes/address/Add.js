import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  WingBlank,
  WhiteSpace,
  TextareaItem,
  InputItem,
  Radio,
  NavBar,
  Button,
  Icon
} from 'antd-mobile';
import {connect} from 'react-redux'
import style from './index.less'
import {createForm} from 'rc-form';

const addIcon = require('!svg-sprite!../../svg/add.svg');
const Item = List.Item;
const RadioItem = Radio.RadioItem;

@connect()
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
  _handleBack = () => {
    let {history} = this.props;
    history.goBack()
  }
  _handleSave = () => {
    this.props.form.validateFields({
      force: true
    }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        alert('校验失败');
      }
    });
  }

  render() {
    const {value} = this.state;
    const {getFieldProps, getFieldError} = this.props.form;
    const data = [
      {
        value: 0,
        label: '男'
      }, {
        value: 1,
        label: '女'
      }
    ];
    return (
      <div>
        <NavBar
          mode="light"
          onLeftClick={this._handleBack}
          rightContent={(
          <span onClick={this._handleSave}>保存</span>
        )}>新增收货地址</NavBar>
        <WhiteSpace size="md"/>
        <form>
          <List renderHeader={() => '联系人'}>
            <InputItem
              {...getFieldProps('name')}
              labelNumber={2}
              placeholder="请填写收货人姓名"
              type="input">
              姓名:
            </InputItem>
            <Item>
              <div className={style['radio-wrap']}>
                {data.map(i => (
                  <Radio
                    key={i.value}
                    checked={value === i.value}
                    className={style['radio']}
                    onChange={() => this.onChange(i.value)}>
                    {i.label}</Radio>
                ))}
              </div>
            </Item>
            <InputItem
              {...getFieldProps('telephone')}
              labelNumber={2}
              placeholder="请填写收货人的手机号码"
              type="input">
              电话:
            </InputItem>
          </List>
          <List renderHeader={() => '详细地址'}>
            <InputItem
              {...getFieldProps('district')}
              labelNumber={6}
              placeholder="点击选择"
              type="input">
              小区/大厦/学校:
            </InputItem>
            <InputItem
              {...getFieldProps('address')}
              labelNumber={6}
              placeholder="例：2号楼802室"
              type="input">
              楼号-门牌号:
            </InputItem>
          </List>
        </form>
      </div>
    )
  }
}

export default createForm()(Address);
