import React from "react";
import Fade from "react-reveal/Fade";
import itemDetail from "json/itemDetails.json";

import BookingForm from "./BookingForm";
import Description from "./Description";

export default function Content({startBooking}) {
  return (
    <section className="container">
      <Fade bottom>
        <div className="row">
          <div className="col-7 pr-5">
            <Description data={itemDetail} />
          </div>
          <div className="col-5">
            <BookingForm itemDetail={itemDetail} startBooking={startBooking} />
          </div>
        </div>
      </Fade>
    </section>
  );
}
