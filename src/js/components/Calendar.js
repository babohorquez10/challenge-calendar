import React from 'react';
import { connect } from 'react-redux';
import Week from './Week';
import Form from './Form';
import { Modal } from 'react-bootstrap';
import { hideModal } from '../actions/index';

const mapStateToProps = state => {
  return { days: state.days, selectedDay: state.selectedDay, showModal: state.showModal };
};

function mapDispatchToProps(dispatch) {
  return {
    hideModal: el => dispatch(hideModal( ))
  };
}

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

        <Modal show={this.props.showModal} onHide={this.props.hideModal} animation={true}>
          <Modal.Header closeButton >
            <Modal.Title>Add new reminder</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {'Day: ' + this.props.selectedDay}
            <Form changeModalStatus={this.props.hideModal} />
          </Modal.Body>
        </Modal>
        
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

const Calendar = connect(mapStateToProps, mapDispatchToProps)(ConnectedCalendar);

export default Calendar;