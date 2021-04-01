import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import propTypes from "prop-types";

import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateDate = (e) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { date, duration } = this.state.data;
    this.props.startBooking({
      _id: this.props.itemDetail._id,
      duration: duration,
      date: {
        startDate: date.startDate,
        endDate: date.endDate,
      },
    });
    this.props.history.push('/checkout')
  }

  render() {
    const { data } = this.state;
    const { itemDetail } = this.props;

    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        <h4>Start Booking</h4>
        <h4 className="text-teal mt-3">
          ${itemDetail.price}{" "}
          <span className="text-gray-500 font-weight-light">
            per {itemDetail.unit}
          </span>
        </h4>
        <p className="mt-3 t">How long you will stay ?</p>
        <InputNumber
          max={30}
          onChange={this.updateDate}
          suffix=" night"
          name="duration"
          value={data.duration}
          isSuffixPlural
        />

        <p className="mt-3">Pick a Date</p>
        <InputDate
          max={30}
          onChange={this.updateDate}
          name="date"
          value={data.date}
        />
        <p>
          You will pay <b>${itemDetail.price * data.duration}</b> USD per{" "}
          <b>
            {data.duration} {itemDetail.unit}
          </b>
        </p>
        <Button
          onClick={this.startBooking}
          type="link"
          className="btn px-5 mt-3"
          hasShadow
          isPrimary
          isBlock
        >
          Continue Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);