import React, { Component } from 'react';
import Day from './Day.js'
import './Week.css';

class Week extends Component {
  render() {
    return (
      <div className="column">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    );
  }
}

export default Week;