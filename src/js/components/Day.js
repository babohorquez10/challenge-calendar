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
    //
    this.props.changeSelectedDay({day: this.props.day.id});
  }

  render() {
    const { day, weekend, leftBorder } = this.props;    
    return (
      <a href="#" data-toggle="modal" data-target="#modalForm" className="day-anchor" onClick={this.handleClick}>
        <div className={"day " + (day.id <= 7 ? "top-border": "") + (leftBorder === true ? " left-border": "") + (weekend === true ? " weekend" : "")} >
          <div key={day.id} className="day-number">{day.id} </div>
          {day.reminders.map(reminder => <Reminder reminder={reminder}/> )}
        </div>
      </a>
    );
  }
}

const Day = connect(
  null,
  mapDispatchToProps
)(ConnectedDay);

export default Day;