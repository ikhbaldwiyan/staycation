import React from "react";
import Fade from "react-reveal/Fade";
import { InputText } from "elements/Form";
import formatDate from "utils/formatDate";
import IconDate from "assets/images/icons/icon_cities.svg";

export default function Booking(props) {
  const { data, itemDetail, checkout } = props;
  return (
    <Fade>
      <div className="contaier mb-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" height={270}>
                  <img
                    className="img-cover"
                    src={itemDetail.imageUrls[0].url}
                    alt={itemDetail.name}
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col-4 mb-3">
                    <div className="meta-wrapper">
                      <h5>{itemDetail.name}</h5>
                      <span className="text-gray-500">
                        {itemDetail.city}, {itemDetail.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${+checkout.duration * itemDetail.price} USD {" "}
                      <span className="text-gray-500">
                        per {" "}
                      </span>
                      {checkout.duration}  {itemDetail.unit} 
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                  <div className="col-auto">
                    <span className="text-gray-700 mb-2 mt-2">
                      <img src={IconDate} width={18} className="mb-1" alt="date" />{" "}
                      {formatDate(checkout.date.startDate)} - {formatDate(checkout.date.endDate)} {"  "} 
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{paddingLeft: 80}}>
            <Fade delay={600}>
              <label htmlFor="firstName">First Name</label>
              <InputText 
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={props.onChange}
              />

              <label htmlFor="lastName">Last Name</label>
              <InputText 
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={props.onChange}
              />

              <label htmlFor="email">Email Address</label>
              <InputText
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={props.onChange}
              />

              <label htmlFor="phone">Phone Number</label>
              <InputText 
                id="phone"
                name="phone"
                type="tel"
                value={data.phone}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
