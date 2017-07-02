import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {NavBar, Icon, List} from 'antd-mobile';
import Scroll from 'react-scroll';
import Menu from './Menu'
// import ListContent from './ListContent'
import ListItem from './ListItem';
import style from './index.less'
import Cart from '../../components/Cart/';
import foodList from '../../mock/foodList';

const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scrollSpy = Scroll.scrollSpy;

function mapStateToProps(state) {
  return {cart: state.list.cart}
}
@connect(mapStateToProps)
class FoodList extends React.Component {
  static propTypes = {
    cart: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      contentHeight: ''
    };
  }

  componentDidMount() {
    let headerHeight = document.getElementById('header').offsetHeight;
    let footerHeight = document.getElementById('cart').offsetHeight;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    this.setState({
      contentHeight: windowHeight - headerHeight - footerHeight
    })

    Events.scrollEvent.register('begin', function() {
      //console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      //console.log("end", arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleChange = (item, value) => {
    let {dispatch} = this.props;

    dispatch({
      type: 'list/changeCart',
      payload: {
        ...item,
        quantity: value
      }
    })
  }

  handleClearAll = () => {
    let {dispatch} = this.props;

    dispatch({type: 'list/clearAll'})
  }

  handleToOrder = () => {
    let {history} = this.props;
    history.push('checkout/2')
  }

  renderMenu = () => {
    return (
      <div className={style['menu-nav']}>
        <ul>
          {foodList.map((item, index) => {
            return (
              <li key={item.typeId}>
                <Link
                  activeClass="active"
                  className="test1"
                  containerId="containerElement"
                  to={item.typeId}
                  spy={true}
                  smooth={true}
                  duration={250}>{item.typeName}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  renderListSection = () => {
    return foodList.map((item, index) => {
      return (
        <Element
          key={item.typeId}
          name={item.typeId}
          className="element">
          <List
            key={index}
            className="my-list"
            renderHeader={() => (
            <div
              id={`nav-${item.typeId}`}
              data-id={item.typeId}>{item.typeName}</div>
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
      return (<ListItem
        key={item.id}
        dataSource={item}
        defaultValue={hasItem
        ? hasItem.quantity
        : 0}
        onChange={this.handleChange.bind(this, item)}/>)
    })
  }

  render() {
    let {history, cart} = this.props;
    let {contentHeight} = this.state;
    let ListContentProps = {
      cart,
      onChange: this.handleChange
    }
    let cartProps = {
      cart,
      clearAll: this.handleClearAll,
      handleChange: this.handleChange,
      toOrder: this.handleToOrder
    }
    // console.log(this.state.contentHeight)
    return (
      <div className={style['container']}>
        {contentHeight && (
          <div
            className={style['menu-container']}
            style={{
            height: this.state.contentHeight
          }}>
            {this.renderMenu()}
            <div
              id="containerElement"
              className={style['list-content']}>
              {this.renderListSection()}
            </div>
            {/* <ListContent {...ListContentProps}/> */}
          </div>
        )}
        <Cart {...cartProps}/>
      </div>
    );
  }

}

FoodList.propTypes = {};

export default FoodList;
