import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions/index';
import '../../styles/form.css';
import { colors } from '../constants/action-types';
import { Button } from 'react-bootstrap';

function mapDispatchToProps(dispatch) {
  return {
    addReminder: reminder => dispatch(addReminder(reminder))
  };
}

const mapStateToProps = state => {
  return { selectedDay: state.selectedDay };
};

class ConnectedForm extends Component {

  maxChars = 30;

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      time: '',
      color: 0,
      city: '',
      charsRemaining: this.maxChars
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReminderChange = this.handleReminderChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleReminderChange(event) {
    const text = event.target.value;
    const diff = this.maxChars - text.length;

    if(diff >= 0) {
      this.setState({
        title: text,
        charsRemaining: this.maxChars - text.length
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, time, color, city } = this.state;
    const { selectedDay } = this.props;

    this.props.addReminder({ id: selectedDay, reminder: {title, time, color, city} });
    this.setState({ title: '', time: '', color: 0, city: '', charsRemaining: this.maxChars });

    this.props.changeModalStatus(false);
  }

  render() {
    const { title, time, color, city } = this.state;
    return (
      <form className="reminder-form" onSubmit={this.handleSubmit}>
        <div className="reminder-form-section">
          <label className="reminder-form-label" htmlFor='title'>Reminder (max {this.maxChars}): </label>
          <div className={"max-chars" + (this.state.charsRemaining === 0 ? " chars-warning" : "")}>{this.state.charsRemaining}</div>
          <input
            className="reminder-form-input text-area-input"
            type='text'
            id='title'
            value={title}
            onChange={this.handleReminderChange}
            required
          />
        </div>
        <div className="reminder-form-section">
          <label className="reminder-form-label" htmlFor='time'>Time: </label>
          <input
            className="reminder-form-input"
            type='time'
            id='time'
            value={time}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="reminder-form-section">
          <label className="reminder-form-label" htmlFor='city'>City: </label>
          <input
            className="reminder-form-input"
            type='text'
            id='city'
            value={city}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="reminder-form-section">
          <label className="reminder-form-label" >Color: </label>
          <select className="reminder-form-input" id="color" style={{backgroundColor: colors[color]}} onChange={this.handleChange} required>
            {colors.map((col, index) => (
              <option value={index} style={{backgroundColor: col}}></option>
            ))}
          </select>
        </div>
        <Button className="reminder-form-btn" type="submit">Save</Button>
      </form>
    );
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default Form;