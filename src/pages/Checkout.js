import React, { Component } from 'react'
import itemDetail from 'json/itemDetails.json';

import Header from 'parts/Header'
import Booking from 'parts/checkout/Booking';

export default class Checkout extends Component {
  render() {
    return (
      <>
        <Header isCentered />
        <Booking itemDetail={itemDetail} />
      </>
    )
  }
}
