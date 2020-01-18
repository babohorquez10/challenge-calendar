import React from 'react';
import { connect } from 'react-redux';
import Week from './Week';
import Form from './Form';
import ReminderList from './ReminderList';
import { Modal, Button } from 'react-bootstrap';
import { hideModal } from '../actions/index';
import { showAddReminderForm } from '../actions/index';

const mapStateToProps = state => {
  return { 
    days: state.days, 
    selectedDay: state.selectedDay, 
    showModal: state.showModal,
    viewReminders: state.viewReminders,
    showAddForm: state.showAddForm,
    showEditForm: state.showEditForm
  };
};

function mapDispatchToProps(dispatch) {
  return {
    hideModal: () => dispatch(hideModal( )),
    showAddReminderForm: () => dispatch(showAddReminderForm())
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

        <Modal className="reminders-modal" show={this.props.showModal} onHide={this.props.hideModal} animation={true}>
          <Modal.Header closeButton >
            <Modal.Title>
              {this.props.viewReminders ? 'Reminders' : ''}
              {this.props.showAddForm ? 'Add new reminder' : ''}
              {this.props.showEditForm ? 'Edit reminder' : ''}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{'Day: ' + this.props.selectedDay}</h4>
            {this.props.viewReminders ?  
              (
                <>
                  <ReminderList reminders={this.props.days[this.props.selectedDay - 1].reminders} /> 
                  <Button className="modal-btn add-reminder-btn" onClick={this.props.showAddReminderForm}>Add reminder</Button>
                </>
              ) : null
            }
            {this.props.showAddForm || this.props.showEditForm ?
              <Form changeModalStatus={this.props.hideModal} /> : null
            }
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