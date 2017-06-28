import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'antd-mobile';
import classNames from 'classnames'
import style from './index.less';
const starIcon = require('!svg-sprite!../../svg/star.svg');

class Star extends React.Component {
  static propTypes = {
    count: PropTypes.number,
    onChange: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedCount: 0
    };
  }
  render() {
    let {count} = this.props;
    let {selectedCount} = this.state;
    let starArr = [];
    for (let i = 1; i <= count; i++) {
      let selectedCls = classNames({
        [style['star-item']]: true,
        [style['star-item-selected']]: i <= selectedCount
          ? true
          : false
      })

      starArr.push(
        <span key={i} className={selectedCls}>
          <Icon onClick={() => this.handleClick(i)} key={i} type={starIcon}/>
        </span>
      )
    }

    return (
      <div className={style['star-wrap']}>
        {starArr}
      </div>
    )
  }
  handleClick = (value) => {
    let {onChange} = this.props;
    this.setState({selectedCount: value})
    onChange && onChange(value)
  }
}

export default Star;
