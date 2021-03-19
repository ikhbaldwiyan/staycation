import React, { Component } from "react";

import Button from 'elements/Button';
import { InputDate, InputNumber } from 'elements/Form';

export default class BookingForm extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
    number: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { data } = this.props

    return (
      <div>
        <h5>Start Booking</h5>
        <h4 className="text-teal mt-3">
          ${data.price} {' '}
          <span className="text-gray-500 font-weight-light">per {data.unit}</span> 
        </h4>
        <p className="mt-3">How long you will stay ?</p>
        <InputNumber
          max={30}
          onChange={this.handleChange}
          suffix=" night"
          name="number"
          value={this.state.number}
          isSuffixPlural
        />
        <p className="mt-3">Pick a Date</p>
        <InputDate
          max={30}
          onChange={this.handleChange}
          name="value"
          value={this.state.value}
        />
        <p>
          You will pay <b>$480</b> USD per <b>2 nights</b>
        </p>
        <Button className="btn px-5" hasShadow isPrimary isBlock>
          Continue Book
        </Button>
      </div>
    );
  }
}
