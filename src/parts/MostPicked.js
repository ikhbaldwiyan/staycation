import React from "react";
import Fade from 'react-reveal/Fade';
import Button from "elements/Button";

export default function MostPicked({data, refMostPicked}) {
  return (
    <section className="container" ref={refMostPicked}>
      <Fade bottom>
        <div className="item column-12 mb-3">
          <img
            width="200"
            src="https://image.showroom-cdn.com/showroom-prod/image/top_slider/0f2072404986edd4f5883e76c7a45a84.png"
            className="img-cover"
          />
        </div>
        <div className="container-grid">
          {data.map((item, idx) => (
            <div key={idx} className={`item ${idx === 0 ? "column-12 row-1" : "column-12 row-1"}`}>
              <Fade bottom delay={500 * idx}>
                <div className="card card-featured">
                  <figure className="img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="strecthed-link d-block text-white"
                      href={`live-stream`}
                    >
                      <h5>{item.name}</h5>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}
