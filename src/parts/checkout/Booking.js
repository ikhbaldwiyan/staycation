import React from "react";
import Fade from "react-reveal/Fade";

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
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{itemDetail.name}</h5>
                      <span className="text-gray-500">
                        {itemDetail.city}, {itemDetail.country}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  {/* <span>
                    ${+checkout.duration * itemDetail.price} USD
                    <span className="text-gray-500">
                      {checkout.duration} {itemDetail.unit}
                      ${+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </span> */}
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5">
            
          </div>
        </div>
      </div>
    </Fade>
  );
}
