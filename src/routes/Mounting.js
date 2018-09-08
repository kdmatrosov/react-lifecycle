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
    // run on init // update props // setState
    return null;
  }

  componentDidMount = () => {

  };

  render() {
    console.log(this.state)
    return (
      <div>Mounting</div>
    );
  }
}

export default Mounting;