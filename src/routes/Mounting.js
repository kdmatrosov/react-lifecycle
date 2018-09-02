import React, { Component } from 'react';

class Mounting extends Component {
  constructor(props) {
    super(props);
    this.initComponentData = 'secret';
    this.state = {
      initialValue: 'data'
    };

    // bind your functions
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  componentDidMount = () => {

  };

  render() {
    return null;
  }
}

export default Mounting;