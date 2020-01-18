import React from 'react';
import '../../styles/day.css';
import { connect } from 'react-redux';
import { changeSelectedDay } from '../actions/index';
import Reminder from './Reminder';
import { sortReminders } from '../utilities/functions';

function mapDispatchToProps(dispatch) {
  return {
    changeSelectedDay: day => dispatch(changeSelectedDay(day))
  };
}

class ConnectedDay extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.changeSelectedDay({day: this.props.day.id});
  }

  render() {
    const { day, weekend, leftBorder } = this.props;

    return (
      <div onClick={this.handleClick}>
        <div className={"day " + (day.id <= 7 ? "top-border": "") + (leftBorder === true ? " left-border": "") + (weekend === true ? " weekend" : "")} >
          <div key={day.id} className="day-number">{day.id} </div>
          {sortReminders(this.props.day.reminders).map(reminder => <Reminder key={reminder.id} reminder={reminder}/> )}
        </div>
      </div>
    );
  }
}

const Day = connect(
  null,
  mapDispatchToProps
)(ConnectedDay);

export default Day;