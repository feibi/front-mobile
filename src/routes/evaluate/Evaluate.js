import React from 'react';
import {WingBlank, WhiteSpace} from 'antd-mobile';
import Star from '../../components/Star'
import style from './index.less';

class Evaluate extends React.Component {
  render() {
    return (
      <div className={style['evaluate']}>
        <div className={style['evaluate-section']}>
          <div className={style['evaluate-header']}>
            <div className={style['evaluate-pic']}>
              <image/>
            </div>
            <div className={style['evaluate-title']}>
              <h4>达达快递</h4>
              <span>已经送达</span>
            </div>
          </div>
          <div>
            <Star count={5} onChange={this.handleStarChange}/>
          </div>
        </div>
      </div>
    )
  }
  handleStarChange = (value) => console.log(value)
}

export default Evaluate
