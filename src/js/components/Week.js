import React from 'react';
import Day from './Day';

class Week extends React.Component {

  render() {
    return (
    <div className="week">
      {this.props.days.map((el, index) => (
        <Day day={el} weekend={index === 0 || index === 6} leftBorder={index === 0} />
      ))}
    </div>
    );
  }
}

export default Week;