import React from 'react';
import '../../styles/day.css';

class Day extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    //
  }

  render() {
    const { day, weekend, leftBorder } = this.props;    
    return (
      <a href="#" data-toggle="modal" data-target="#modalForm" className="day-anchor">
        <div className={"day " + (day.id <= 7 ? "top-border": "") + (leftBorder === true ? " left-border": "") + (weekend === true ? " weekend" : "")} >
          <div key={day.id} className={"day-number"}>{day.id} </div>
          {day.reminders.map(reminder => <div>{reminder.title}</div> )}
        </div>
      </a>
    );
  }
}

export default Day;