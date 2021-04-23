import axios from "axios";
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Button from "elements/Button";
import { isMobile } from "react-device-detect";

export default function MostPicked() {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    axios.get('/room_status_list.json').then((res) => {
      const listRoom = res.data;
      setRoom(listRoom);
    })
  });
  
  return (
    <section className="container">
        <Fade left>
          <div className="item column-12 mb-3">
            <center>
              <img
                width="600"
                src="https://image.showroom-cdn.com/showroom-prod/image/top_slider/0f2072404986edd4f5883e76c7a45a84.png"
                className="img-fluid"
              />
            </center>
          </div>
        </Fade>

        {/* Is live */}
        <div className="container-grid mb-3">
          {room.map((item, idx) => (
            item.name.includes("JKT48") && item.is_live &&
            <div key={idx} className={`item ${isMobile ? "column-12 row-1" : "column-6 row-1"}`}>
              <Fade bottom>
                <div className="card card-featured">
                    <div className="tag" style={{backgroundColor: 'teal'}}>
                      Live <span className="font-weight-light">Now</span>
                    </div>
                  <figure className="img-wrapper">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="strecthed-link d-block text-white"
                      href={`live-stream/${item.id}`}
                    >
                      <h5>{item.url_key.substr(6)} JKT48</h5>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>

        {/* Not Live */}
        <div className="container-grid">
          {room.map((item, idx) => (
            item.name.includes("JKT48") && !item.is_live &&
            <div key={idx} className={`item ${isMobile ? "column-12 row-1" : "column-4 row-1"}`}>
              <Fade bottom>
                <div className="card card-featured">
                  <figure className="img-wrapper">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      className="strecthed-link d-block text-white"
                      href={`live-stream/${item.id}`}
                    >
                      <h5>{item.url_key.substr(6)} JKT48</h5>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
    </section>
  );
}
