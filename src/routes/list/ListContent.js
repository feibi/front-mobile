import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {List} from 'antd-mobile';
import Scroll from 'react-scroll';
import ListItem from './ListItem';
import style from './index.less';
import foodList from '../../mock/foodList';

const Item = List.Item;
const Brief = Item.Brief;
const Element = Scroll.Element;
class ListContent extends React.Component {
  static propTypes = {
    cart: PropTypes.array,
    onChange: PropTypes.func
  }
  constructor(props) {
    super(props);
  }
  renderListSection = () => {
    return foodList.map((item, index) => {
      return (
        <Element key={item.typeId} name={item.typeId}>
        <List key={index} className="my-list" renderHeader={() => (
          <div id={`nav-${item.typeId}`} data-id={item.typeId}>{item.typeName}</div>
        )}>
          {this.renderListItem(item.entries)}
        </List>
        </Element>
      )
    })
  }

  renderListItem = (entries) => {
    let {cart, onChange} = this.props;
    return entries.map((item, index) => {
      let hasItem = cart.find((_value, _index) => _value.id === item.id)
      return (<ListItem key={item.id} dataSource={item} defaultValue={hasItem
        ? hasItem.quantity
        : 0} onChange={onChange.bind(this, item)}/>)
    })
  }

  render() {
    return (
      <div  className={style['list-content']}>
        {this.renderListSection()}
      </div>
    )
  }
}

export default ListContent
