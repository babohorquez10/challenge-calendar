import { ADD_REMINDER } from '../constants/action-types';

export function addReminder(payload) {
  return { type: ADD_REMINDER, payload };
}