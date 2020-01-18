import React from 'react';
import '../../styles/reminder.css';
import { colors } from '../utilities/constants';

const Reminder = ({ reminder }) => (
  <div 
    className="reminder" 
    style={{backgroundColor: colors[reminder.color]}} 
    data-toggle="tooltip" 
    data-placement="bottom" 
    title={reminder.time + '. ' + reminder.city + '. ' + reminder.title}
  >
    <span className="reminder-time">{reminder.time}</span>
    <span className='reminder-text'>{reminder.title.length > 7 ? reminder.title.substring(0, 7) + '...': reminder.title}</span>
  </div>
);

export default Reminder;