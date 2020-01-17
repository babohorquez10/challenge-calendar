import React from 'react';
import '../../styles/day.css';
import { connect } from 'react-redux';
import { changeSelectedDay } from '../actions/index';
import Reminder from './Reminder';

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

  sortReminders() {
    const reminders = this.props.day.reminders;
    const cloneReminders = [...reminders];

    const sortedReminders = cloneReminders.sort((rem1, rem2) => {

      const rem1Time = rem1.time.split(':');
      const rem1Hour = parseInt(rem1Time[0], 10);
      const rem1Min = parseInt(rem1Time[1], 10);

      const rem2Time = rem2.time.split(':');
      const rem2Hour = parseInt(rem2Time[0], 10);
      const rem2Min = parseInt(rem2Time[1], 10);

      if(rem1Hour < rem2Hour || (rem1Hour === rem2Hour && rem1Min < rem2Min) ) {
        return -1;
      }

      else if(rem1Hour > rem2Hour || (rem1Hour === rem2Hour && rem1Min > rem2Min) ) {
        return 1;
      }

      else {
        return 0;
      }
    });
    
    return sortedReminders;
  }

  render() {
    const { day, weekend, leftBorder } = this.props;
    this.sortReminders();

    return (
      <div onClick={this.handleClick}>
        <div className={"day " + (day.id <= 7 ? "top-border": "") + (leftBorder === true ? " left-border": "") + (weekend === true ? " weekend" : "")} >
          <div key={day.id} className="day-number">{day.id} </div>
          {this.sortReminders().map(reminder => <Reminder reminder={reminder}/> )}
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