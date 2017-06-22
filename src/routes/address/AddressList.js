import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  WingBlank,
  WhiteSpace,
  TextareaItem,
  Radio,
  NavBar,
  SwipeAction,
  Icon
} from 'antd-mobile';
import {connect} from 'react-redux'
import style from './index.less'
const addIcon = require('!svg-sprite!../../svg/add.svg');
const deleteIcon = require('!svg-sprite!../../svg/delete.svg');
const Item = List.Item;
const RadioItem = Radio.RadioItem;

@connect()
class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      isEdit: false
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
  _handleToAdd = () => {
    let {history} = this.props;
    history.push('/add')
  }

  _handleSwitchEdit = () => {
    this.setState({isEdit: true})
  }

  _handleFinish = () => {
    this.setState({isEdit: false})
  }
  render() {
    const {value, isEdit} = this.state;
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
        <NavBar
          mode="light"
          onLeftClick={this._handleBack}
          rightContent={(
          <div>
            {isEdit
              ? (
                <span onClick={this._handleFinish}>完成</span>
              )
              : (
                <span onClick={this._handleSwitchEdit}>管理</span>
              )}
          </div>
        )}>收货地址</NavBar>
        <WhiteSpace size="md"/>
        <List>
          {data.map(i => (
            <SwipeAction
              right={[{
                text: (
                  <span><Icon type={deleteIcon}/></span>
                ),
                className: style['delete'],
                onPress: () => console.log('delete')
              }
            ]}
              onOpen={() => console.log('global open')}
              onClose={() => console.log('global close')}>
              <RadioItem
                key={i.value}
                checked={value === i.value}
                onChange={() => this.onChange(i.value)}>
                <p>{i.label}</p>
                <div className={style['user']}>
                  <span>{i.name}</span>
                  <span>{i.telephone}</span>
                </div>
              </RadioItem>
            </SwipeAction>
          ))}
        </List>
        <div
          className={style['add-address']}
          onClick={this._handleToAdd}>
          <Icon type={addIcon}/>新增收货地址
        </div>
      </div>
    )
  }
}

export default Address;
