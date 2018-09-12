import React, { Component } from 'react';
import './demo.css';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.initComponentData = 'secret';
    this.state = {
      initialValue: 'data'
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
    }
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    return null;
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(1)
  };

  render() {
    return (
      <div className="demo">
        <div className="movable-window" ref={this.movableWindow}></div>
      </div>
    );
  }
}

export default Demo;