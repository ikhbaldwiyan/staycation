import React from "react";
import Fade from "react-reveal/Fade";

import BookingForm from "./BookingForm";
import Description from "./Description";

export default function Content({startBooking, data}) {
  return (
    <section className="container">
      <Fade bottom>
        <div className="row">
          <div className="col-7 pr-5">
            <Description data={data} />
          </div>
          <div className="col-5">
            <BookingForm itemDetail={data} startBooking={startBooking} />
          </div>
        </div>
      </Fade>
    </section>
  );
}
