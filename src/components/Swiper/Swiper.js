import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const Swiper = ({children, show}) => (
  <div>
    <ReactCSSTransitionGroup
      transitionName='swiper'
      transitionEnterTimeout={350}
      transitionLeaveTimeout={250}>
      {show && (
        <div className='swiper-layer'>{children}</div>
      )}
    </ReactCSSTransitionGroup>
  </div>
);

Swiper.propTypes = {};

export default Swiper;
