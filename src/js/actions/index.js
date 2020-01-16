import { ADD_REMINDER } from '../constants/action-types';
import { CHANGE_SELECTED_DAY } from '../constants/action-types';

export function addReminder(payload) {
  return { type: ADD_REMINDER, payload };
}

export function changeSelectedDay(payload) {
  return { type: CHANGE_SELECTED_DAY, payload };
}