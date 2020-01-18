import React from 'react';
import ReminderDetail from './ReminderDetail';
import '../../styles/reminderList.css';
import { sortReminders } from '../utilities/functions';

class ReminderList extends React.Component {

  render() {
    const { reminders } = this.props;

    return (
      <div>
        {reminders.length === 0 
        ? <div className="no-reminders-msg">You do not have any reminder yet.</div> 
        : sortReminders(this.props.reminders).map(rem => <ReminderDetail key={rem.id} reminder={rem} /> )}
      </div>
    );
  }
}

export default ReminderList;