import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder } from '../actions/index';
import '../../styles/form.css';
import { colors } from '../constants/action-types';

function mapDispatchToProps(dispatch) {
  return {
    addReminder: reminder => dispatch(addReminder(reminder))
  };
}

const mapStateToProps = state => {
  return { selectedDay: state.selectedDay };
};

class ConnectedForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      time: '',
      color: 0,
      city: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, time, color, city } = this.state;
    const { selectedDay } = this.props;

    this.props.addReminder({ id: selectedDay, reminder: {title, time, color, city} });
    this.setState({ title: '', time: '', color: 0, city: '' });
    
  }

  render() {
    const { title, time, color, city } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor='title'>Reminder: </label>
          <input
            type='text'
            id='title'
            value={title}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='time'>Time: </label>
          <input
            type='time'
            id='time'
            value={time}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='city'>City: </label>
          <input
            type='text'
            id='city'
            value={city}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label >Color: </label>
          <select id="color" style={{backgroundColor: colors[color]}} onChange={this.handleChange} required>
            {colors.map((col, index) => (
              <option value={index} style={{backgroundColor: col}}></option>
            ))}
          </select>
        </div>
        <button type='submit'>Save</button>
      </form>
    );
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default Form;