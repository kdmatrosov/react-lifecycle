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

  };

  render() {
    return (
      <div className="demo">
        <div className="movable-window"></div>
      </div>
    );
  }
}

export default Demo;