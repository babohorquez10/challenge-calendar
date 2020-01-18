import { ADD_REMINDER } from '../constants/action-types';
import { EDIT_REMINDER } from '../constants/action-types';
import { CHANGE_SELECTED_DAY } from '../constants/action-types';
import { HIDE_MODAL } from '../constants/action-types';
import { SHOW_MODAL_ADD_FORM } from '../constants/action-types';
import { SHOW_MODAL_EDIT_FORM } from '../constants/action-types';

export function addReminder(payload) {
  return { type: ADD_REMINDER, payload };
}

export function editReminder(payload) {
  return { type: EDIT_REMINDER, payload };
}

export function showAddReminderForm() {
  return { type: SHOW_MODAL_ADD_FORM };
}

export function showEditReminderForm(payload) {
  return { type: SHOW_MODAL_EDIT_FORM, payload };
}

export function changeSelectedDay(payload) {
  return { type: CHANGE_SELECTED_DAY, payload };
}

export function hideModal() {
  return { type: HIDE_MODAL };
}