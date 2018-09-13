import React, { Component } from 'react';
import './demo.css';

class Demo extends Component {
  showDate = null;
  constructor(props) {
    super(props);
    this.initComponentData = 'secret';
    this.state = {
      initialValue: 'data',
      date: null,
    };
    this.movableWindow = React.createRef();

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
    this.showDate = setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextState.initialValue === this.state.initialValue;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    // use to keep state of uncontrolled components
    const { left, top } = this.movableWindow.current.style;
    return { left, top };
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    // Object.assign(this.movableWindow.current.style, snapshot);
    console.log(snapshot)
  };

  componentWillUnmount = () => {
    clearInterval(this.showDate);
  };

  render() {
    const movableWindow = <div className="movable-window" ref={this.movableWindow}></div>;
    return (
      <div className="demo">
        {this.state.date && this.state.date.toString()}
        {movableWindow}
      </div>
    );
  }
}

export default Demo;