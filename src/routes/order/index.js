import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Drawer, List, NavBar, Button} from 'antd-mobile';
import style from './index.less'
class Order extends React.Component {
  state = {
    show: false
  }
  onClick = (d) => {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div>
        <Button onClick={this.onClick}>点击</Button>
        <ReactCSSTransitionGroup
          transitionName='swiper'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

            {this.state.show && (
              <div className='swiper-layer'>我</div>
            )}

        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default Order
