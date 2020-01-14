import React from 'react';
import { connect } from 'react-redux';
import Week from './Week';

const mapStateToProps = state => {
  return { days: state.days };
};

class ConnectedCalendar extends React.Component {
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="day-title">Sunday</div>
          <div className="day-title">Monday</div>
          <div className="day-title">Tuesday</div>
          <div className="day-title">Wednesday</div>
          <div className="day-title">Thursday</div>
          <div className="day-title">Friday</div>
          <div className="day-title">Saturday</div>
        </div>
        {
          this.mapDays().map(el => (
          <Week days={el}>
          </Week>
        ))}
      </div>
    );
  }

  mapDays() {
    const { days } = this.props;
    let arr = [];

    for(let i = 0; i < days.length; i += 7) {
      let index = i + 7;
      if(index > days.length) index = days.length;

      arr.push(days.slice(i, index));
    }

    return arr;
  }
}

// const ConnectedCalendar = ({ days }) => (
//   <div className="container">
//     <div className="row">
      
//     {
//     days.map(el => (
//       <div className="col-1">
//         <span key={el.id}>{el.id}, {el.reminders.map(reminder => <span>{reminder.title}</span> )}</span>
//       </div>
//     ))}
//     </div>
//   </div>
  
// );

const Calendar = connect(mapStateToProps)(ConnectedCalendar);

export default Calendar;