import React from 'react';
// import { province } from 'antd-mobile-demo-data';
import { ListView, List } from 'antd-mobile';
import style from  './index.less'
const { Item } = List;
class Menu extends React.Component{
  constructor(props) {
   super(props);
 }

 render() {
   return (
     <div className={style['menu-nav']}>
       <ul>
         <li>热销</li>
         <li className={style['active']}>折扣</li>
         <li>超值套餐</li>
         <li>大荤单品</li>
         <li>素食单品</li>
         <li>热销</li>
         <li>热销</li>
         <li>热销</li>
         <li>热销</li>
         <li>热销</li>
         <li>热销</li>
         <li>热销</li>
         <li>热销</li>
         <li>热销</li>
         <li>热销</li>
       </ul>
     </div>
   );
 }
}

Menu.propTypes = {};

export default Menu;
