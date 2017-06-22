import React from 'react';
import {connect} from 'dva';
import {NavBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import {RouteTransition, preset} from 'react-router-transition';
import style from './style/index.less';
import Cart from '../Cart/';

@connect(state => {
  return {cart: state.list.cart}
})
class Layout extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      contentHeight: ''
    }
  }
  _handleBack = () => {
    let {history} = this.props;
    history.goBack()
  }
  handleClearAll = () => {
    let {dispatch} = this.props;

    dispatch({type: 'list/clearAll'})
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

  handleToOrder = () => {
    let {history} = this.props;
    history.push('checkout')
    console.log('toOrder')
  }

  handleShowNavBar = () => {
    const {location} = this.props;
    const {pathname} = location;

    switch (pathname) {
      case '/address':
        return false;
      case '/add':
        return false;
      case '/remark':
        return false;
      default:
        return true
    }
  }
  render() {
    let {cart, location} = this.props;
    let cartProps = {
      cart,
      clearAll: this.handleClearAll,
      handleChange: this.handleChange,
      toOrder: this.handleToOrder
    }
    const popStateStyles = {
      atEnter: {
        translateX: -100
      },
      atLeave: {
        translateX: 0
      },
      atActive: {
        translateX: 0
      }
    }

    const pushStateStyles = {
      atEnter: {
        translateX: 100
      },
      atLeave: {
        translateX: 0
      },
      atActive: {
        translateX: 0
      }
    }

    const styles = this.props.location.action === 'POP'
      ? popStateStyles
      : pushStateStyles;

    return (
      <div className='container'>
        {this.handleShowNavBar() && (
          <header
            id='header'
            className={style['header']}>
            <div
              ref='header'
              className={style['header-fixed']}>
              <NavBar
                mode="light"
                onLeftClick={this._handleBack}>蒸的有味道</NavBar>
            </div>
          </header>
        )}
        <div
          style={{
          position: 'relative'
        }}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

Layout.propTypes = {};

export default Layout;
