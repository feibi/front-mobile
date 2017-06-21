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

    const {getFieldProps, getFieldError} = this.props.form;
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
          <List
            renderHeader={() => '验证表单'}
            renderFooter={() => getFieldError('account') && getFieldError('account').join(',')}>
            <InputItem
              {...getFieldProps('password')}
              placeholder="请输入密码"
              type="password">
              密码
            </InputItem>
          </List>
        </form>
      </div>
    )
  }
}

export default createForm()(Address);
