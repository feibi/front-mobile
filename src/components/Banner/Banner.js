import React from 'react';
import {Carousel} from 'antd-mobile';
import style from './style/index.less';
class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  render() {
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
    return (
      <Carousel
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
      </Carousel>
    )
  }
}

export default Banner
