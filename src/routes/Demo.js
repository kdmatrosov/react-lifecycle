import React, { Component } from 'react';
import './demo.css';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.initComponentData = 'secret';
    this.state = {
      initialValue: 'data',
      date: null,
      blocks: [],
    };
    this.movableWindow = React.createRef();
    this.showDate = null;
    // bind your functions
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // run on init // update props // setState
    return null;
  }

  componentDidMount = () => {
    const movableWindow = this.movableWindow.current;
    function moveAt(e) {
      movableWindow.style.left = e.pageX + 'px';
      movableWindow.style.top = e.pageY + 'px';
    }
    movableWindow.onmousedown = function (e) {
      document.onmousemove = function (e) {
        moveAt(e);
      }
      movableWindow.onmouseup = function () {
        document.onmousemove = null;
        movableWindow.onmouseup = null;
      }
    };
    this.showDate = setInterval(() => this.setState((prevState) => ({ date: new Date(), blocks: prevState.blocks.concat([new Date().toString()]) })), 1000);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState.initialValue === this.state.initialValue;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    // use to keep state of uncontrolled components
    return { scroll: document.documentElement.scrollTop || document.body.scrollTop };
  };

  componentDidUpdate = (prevProps, prevState, { scroll = 0 }) => {
  };

  componentWillUnmount = () => {
    clearInterval(this.showDate);
  };

  render() {
    const movableWindow = <div className="movable-window" ref={this.movableWindow}></div>;
    return (
      <div className="demo">
        {this.state.blocks.map(i => <div className="block" key={i}>{i}</div>)}
        {movableWindow}
      </div>
    );
  }
}

export default Demo;