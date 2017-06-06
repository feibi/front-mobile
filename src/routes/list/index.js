import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {NavBar, Icon} from 'antd-mobile';
import Menu from './Menu'
import ListContent from './ListContent'
import style from './index.less'
import Cart from '../../components/Cart/';

function mapStateToProps(state) {
  return {cart: state.list.cart}
}
@connect(mapStateToProps)
class List extends React.Component {
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

  render() {
    let {history, cart} = this.props;
    let {contentHeight} = this.state;
    let ListContentProps = {
      cart,
      onChange: this.handleChange
    }
    console.log(this.state.contentHeight)
    return (
      <div className={style['container']}>
        {contentHeight && (
          <div
            className={style['menu-container']}
            style={{
            height: this.state.contentHeight
          }}>
            <Menu/>
            <ListContent {...ListContentProps}/>
          </div>
        )}

      </div>
    );
  }

}

List.propTypes = {};

export default List;
