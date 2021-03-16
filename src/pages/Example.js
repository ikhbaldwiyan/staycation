import React, { Component } from "react";
import InputNumber from "elements/Form/InputNumber";

export default class Example extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center "
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputNumber
              max={30}
              name="value"
              suffix=" night"
              value={this.state.value}
              onChange={this.handleChange}
              isSuffixPlural
            />
          </div>
        </div>
      </div>
    );
  }
}
