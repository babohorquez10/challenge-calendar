import { ADD_REMINDER } from '../constants/action-types';
import { CHANGE_SELECTED_DAY } from '../constants/action-types';
import { HIDE_MODAL } from '../constants/action-types';

const initialState = {
  days: [
    {id: 1, reminders: []}, {id: 2, reminders: []}, {id: 3, reminders: []}, {id: 4, reminders: []}, {id: 5, reminders: []}, {id: 6, reminders: []}, {id: 7, reminders: []}, {id: 8, reminders: []}, {id: 9, reminders: []}, {id: 10, reminders: []}, {id: 11, reminders: []},
    {id: 12, reminders: []}, {id: 13, reminders: []}, {id: 14, reminders: []}, {id: 15, reminders: []}, {id: 16, reminders: []}, {id: 17, reminders: []}, {id: 18, reminders: []}, {id: 19, reminders: []}, {id: 20, reminders: []}, {id: 21, reminders: []}, 
    {id: 22, reminders: []}, {id: 23, reminders: []}, {id: 24, reminders: []}, {id: 25, reminders: []}, {id: 26, reminders: []}, {id: 27, reminders: []}, {id: 28, reminders: []}, {id: 29, reminders: []}, {id: 30, reminders: []}, {id: 31, reminders: []}
  ],
  selectedDay: 1,
  showModal: false
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_REMINDER) {

    var payload = action.payload;

    const newArray = JSON.parse(JSON.stringify(state.days)); // This creates a deep copy
    const index = newArray.findIndex(x => x.id === payload.id);
    newArray[index].reminders = newArray[index].reminders.concat(payload.reminder);

    return {
      ...state,
      days: newArray
    };

  } else if (action.type === CHANGE_SELECTED_DAY) {

    return {
      ...state,
      selectedDay: action.payload.day,
      showModal: true
    }
  } else if (action.type === HIDE_MODAL) {
    return {
      ...state,
      showModal: false
    }
  }

  return state;
}

export default rootReducer;