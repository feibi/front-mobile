import React from 'react';
import {connect} from 'dva';
import {NavBar} from 'antd-mobile';
import PropTypes from 'prop-types';
import IndexPage from './indexPage'
import Cart from '../components/Cart/'

@connect(state => {
  return {cart: state.list.cart}
})
class App extends React.Component {
  static propTypes = {
    history: PropTypes.object,
    cart: PropTypes.array
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

  componentDidMount() {
    let headerHeight = this.refs.header.offsetHeight;
    let footerHeight = this.refs.footer.offsetHeight
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

    this.setState({
      contentHeight: windowHeight - headerHeight - footerHeight
    })
  }
  render() {
    let {contentHeight} = this.state;
    let {cart} = this.props;

    let cartProps = {
      cart,
      clearAll: this.handleClearAll,
      handleChange: this.handleChange
    }
    return (
      <div className='container'>
        <div ref='header'>
          <NavBar
            mode="light"
            onLeftClick={this._handleBack}>蒸的有味道</NavBar>
        </div>
        {contentHeight && (
          <div
            style={{
            height: contentHeight
          }}>
            {React.cloneElement(this.props.children, {contentHeight})}
          </div>
        )}
        <div ref='footer'>
          <Cart {...cartProps}/>
        </div>
      </div>
    )
  }
}

export default App
