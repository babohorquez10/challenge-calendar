import React from 'react';
import { connect } from 'react-redux';
import Week from './Week';
import Form from './Form';

const mapStateToProps = state => {
  return { days: state.days, selectedDay: state.selectedDay };
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
          <Week days={el} />
        ))}
        <div className="modal fade" id="modalForm" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add new reminder</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {'Day: ' + this.props.selectedDay}
                <Form />
              </div>
            </div>
          </div>
        </div>
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

const Calendar = connect(mapStateToProps)(ConnectedCalendar);

export default Calendar;