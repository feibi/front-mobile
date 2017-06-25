import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Drawer, List, NavBar, Button, WhiteSpace} from 'antd-mobile';
import Scroll from 'react-scroll';
import Swiper from '../../components/Swiper';
import style from './index.less'

const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll
const scrollSpy = Scroll.scrollSpy;

class Order extends React.Component {
  state = {
    show: false
  }
  onClick = (d) => {
    this.setState({
      show: !this.state.show
    })
  }
  _handleBack = () => {
    this.setState({
      show: !this.state.show
    })
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}>Test 1</Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test2"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={500}>Test 2</Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test3"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={500}>Test 3</Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test4"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={500}>Test 4</Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test5"
                    to="test5"
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={1000}>Test 5 ( delay )</Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>

        <Element name="test1" className="ele">
          test 1
        </Element>

        <Element name="test2" className="ele">
          test 2
        </Element>

        <Element name="test3" className="ele">
          test 3
        </Element>

        <Element name="test4" className="ele">
          test 4
        </Element>

        <Element name="test5" className="ele">
          test 5
        </Element>
        <Button onClick={this.onClick}>点击</Button>
        <WhiteSpace/>
        <WhiteSpace/>
        <Swiper show={this.state.show}>
          <NavBar
            mode="light"
            onLeftClick={this._handleBack}>蒸的有味道</NavBar>
        </Swiper>
      </div>
    );
  }
}

export default Order
