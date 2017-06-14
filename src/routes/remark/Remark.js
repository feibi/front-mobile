import React from 'react';
import {
  List,
  WingBlank,
  WhiteSpace,
  Tag,
  NavBar,
  TextareaItem
} from 'antd-mobile';
import style from './index.less'
const Remark = ({}) => {
  const handleClick = () => {};
  return (
    <div onClick={handleClick}>
      <WhiteSpace size="md"/>
      <WingBlank size="md">
        <div className={style['remark-content']}>
          <TextareaItem rows={5} count={50}/>
          <div className={style['tag-wrap']}>
            <Tag data-seed="logId">不吃辣</Tag>
            <Tag data-seed="logId">少放辣</Tag>
            <Tag data-seed="logId">多放辣</Tag>
            <Tag data-seed="logId">不吃辣</Tag>
          </div>
        </div>
        <WhiteSpace size="md"/>
        <div className={style['remark-tip']}>
          <span>发票</span>
          <span>不支持开发票</span>
        </div>
      </WingBlank>
    </div>
  );
}

Remark.propTypes = {};

export default Remark;
