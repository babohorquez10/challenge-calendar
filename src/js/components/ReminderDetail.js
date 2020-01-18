import React from 'react';
import { connect } from 'react-redux';
import { colors } from '../utilities/constants';
import '../../styles/reminderDetail.css';
import { showEditReminderForm } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    showEditReminderForm: reminderId => dispatch(showEditReminderForm(reminderId))
  };
}

class ConnectedReminderDetail extends React.Component {

  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(event) {
    this.props.showEditReminderForm({ reminderId: this.props.reminder.id });
  }

  render() {
    const { reminder } = this.props;

    return (
      <div className="reminder-detail" style={{backgroundColor: colors[reminder.color]}} >
        <div className="edit-reminder">
          <i onClick={this.handleEdit} className="fas fa-edit" data-toggle="tooltip" data-placement="bottom" title="Edit reminder"></i>
        </div>
        <div className="reminder-detail-title">
          {reminder.title}
        </div>
        <div className="reminder-detail-time">
          <strong>When: </strong>{reminder.time}
        </div>
        <div className="reminder-detail-city">
          <strong>Where: </strong>{reminder.city}
        </div>
      </div>
    );
  }
}

const ReminderDetail = connect(null, mapDispatchToProps)(ConnectedReminderDetail);

export default ReminderDetail;