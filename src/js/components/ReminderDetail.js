import React from 'react';
import { colors } from '../utilities/constants';
import '../../styles/reminderDetail.css';

class ReminderDetail extends React.Component {

  render() {
    const { reminder } = this.props;

    return (
      <div className="reminder-detail" style={{backgroundColor: colors[reminder.color]}} >
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

export default ReminderDetail;