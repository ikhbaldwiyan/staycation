import React, { Component } from 'react'
import { connect } from 'react-redux';
import { submitBooking } from 'store/actions/checkout';

import Fade from "react-reveal/Fade";
import Header from 'parts/Header'
import Button from "elements/Button";

import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller
} from 'elements/Stepper';
import Booking from 'parts/checkout/Booking';
import Payment from 'parts/checkout/Payment';
import Completed from 'parts/checkout/Completed';

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Staycation | Checkout";
  }

  submit = (nextStep) => {
    const { data } = this.state;
    const { checkout } = this.props;

    const payload = new FormData();
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("email", data.email);
    payload.append("phoneNumber", data.phone);
    payload.append("idItem", checkout._id);
    payload.append("duration", checkout.duration);
    payload.append("bookingStartDate", checkout.date.startDate);
    payload.append("bookingEndDate", checkout.date.endDate);
    payload.append("accountHolder", data.bankHolder);
    payload.append("bankFrom", data.bankName);
    payload.append("image", data.proofPayment[0]);

    this.props.submitBooking(payload).then(() => {
      nextStep();
    }).catch((error) => {
      console.log(error.message)
    });
  }

  render() {
    const { data } = this.state;
    const { checkout, page } = this.props;

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <Booking
            data={data}
            checkout={checkout}
            itemDetail={page[checkout._id]}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            itemDetail={page[checkout._id]}
            checkout={checkout}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };

    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {(prevStep, nextStep, currentStep, steps) => (
            <>
              <Numbering data={steps} current={currentStep} style={{marginBottom: 50}} />
              <Meta data={steps} current={currentStep} />
              <MainContent data={steps} current={currentStep} />

              {currentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="link"
                    href={`properties/${checkout._id}`}
                    isBlock
                    isLight
                    hasShadow
                  >
                    Cancel
                  </Button>
                </Controller>
              )}

              {currentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankName !== "" && 
                    data.bankHolder !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={() => this.submit(nextStep)}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                    <Button
                      className="btn"
                      type="link"
                      isBlock
                      isLight
                      hasShadow
                      onClick={prevStep}
                    >
                      Cancel
                    </Button>
                </Controller>
              )}

              {currentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page
})

export default connect(mapStateToProps, {submitBooking})(Checkout)
