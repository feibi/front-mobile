import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'antd-mobile';
import Stepper from '../../components/Stepper';
import style from './index.less'
const Item = List.Item;

class ListItem extends React.Component {

  static propTypes = {
    dataSource: PropTypes.object,
    defaultValue: PropTypes.number
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {dataSource} = this.props
    return (
      <Item
        align="top"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine>
        <div className={style['food-title']}>
          {dataSource.name}
        </div>
        <div className={style['food-sign']}>
          <span>新品</span>
        </div>
        <div className={style['food-info']}>
          {dataSource.descripiton}
        </div>
        <div className={style['food-bottom']}>
          <div className={style['food-price']}>
            {'￥' + dataSource.price}
          </div>
          <Stepper
            defaultValue={this.props.defaultValue}
            onChange={this.props.onChange}/>
        </div>
      </Item>
    )
  }
}

export default ListItem
