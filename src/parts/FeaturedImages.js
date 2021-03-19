import React from "react";
import Fade from "react-reveal/Fade";

export default function FeaturedImages({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`item ${idx > 0 ? "column-5" : "column-7"} ${
              idx > 0 ? "row-1" : "row-2"
            } `}
          >
            <Fade bottom delay={300 * idx}>
              <div className="card h-100">
                <figure className="img-wrapper">  
                  <img className="img-cover" src={item.url} alt={item.id}/>
                </figure>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
}
