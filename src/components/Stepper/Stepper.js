import React from 'react';
import {Icon} from 'antd-mobile';
import PropTypes from 'prop-types';
import style from './style/index.less';
const minusIcon = require('!svg-sprite!./style/minus.svg');
const plusIcon = require('!svg-sprite!./style/plus.svg');

class Stepper extends React.Component {

  static propTypes = {
    defaultValue: PropTypes.number,
    onChange: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue
    };
  }

  componentWillReceiveProps(nextProps) {
    let {defaultValue} = this.props;
    if (nextProps.defaultValue !== defaultValue) {
      this.setState({value: nextProps.defaultValue})
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    let {value} = this.state;
    if (nextState.value !== value) {
      return true
    }
    return false
  }

  handleSubtract = () => {
    let {value} = this.state;
    let newValue = value - 1
    console.log('value:', value, 'newValue:', newValue)
    this.setState({
      value: newValue
    }, this.handleChange)
  }

  handleAdd = () => {
    let {value} = this.state;
    let newValue = value + 1
    this.setState({
      value: newValue
    }, this.handleChange)
  }

  handleChange = () => {
    let {onChange} = this.props;
    onChange && onChange(this.state.value)
  }
  render() {
    let {value} = this.state;
    return (
      <div className={style['stepper']}>
        {value > 0 && (
          <span
            className={style['icon-wrap']}
            onClick={this.handleSubtract}>
            <Icon type={minusIcon}/>
          </span>
        )}
        {value > 0 && (
          <span className={style['stepper-number']}>{value}</span>
        )}
        <span
          className={style['icon-wrap']}
          onClick={this.handleAdd}>
          <Icon type={plusIcon}/>
        </span>
      </div>
    )
  }
}

export default Stepper
