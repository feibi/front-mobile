import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';
import {NavBar, Icon, Carousel} from 'antd-mobile';
import Menu from './Menu'
import ListContent from './ListContent'
import style from './index.less'

function mapStateToProps(state) {
  return {cart: state.list.cart}
}
@connect(mapStateToProps)
class IndexPage extends React.Component {
  static propTypes = {
    cart: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      data: [],
      initialHeight: 200
    };
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR']
      });
    }, 100);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
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
    const hProp = this.state.initialHeight
      ? {
        height: this.state.initialHeight
      }
      : {};
    let Decorators = [
      {
        position: 'CenterLeft',
        style: {
          padding: 20
        }
      }
    ];

    let ListContentProps = {
      cart,
      onChange: this.handleChange
    }
    return (
      <div className={style['menu-container']}>
        <Menu/>
        <ListContent {...ListContentProps}/> {/* <Carousel
              decorators={Decorators}
              className={style['my-carousel']}
              autoplay={false}
              infinite
              selectedIndex={1}
              beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
              afterChange={index => console.log('slide to', index)}>
              {this.state.data.map(ii => (
                <a
                  href="http://www.baidu.com"
                  key={ii}
                  style={hProp}>
                  <img
                    src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                    alt="icon"
                    onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({initialHeight: null});
                  }}/>
                </a>
              ))}
            </Carousel> */}
      </div>
    );
  }

}

IndexPage.propTypes = {};

export default IndexPage;
