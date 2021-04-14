import axios from "axios";
import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Button from "elements/Button";

export default function MostPicked({refMostPicked}) {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    axios.get('/room_status_list.json').then((res) => {
      const listRoom = res.data;
      setRoom(listRoom);
    })
  });
  
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
          {room.map((item, idx) => (
            item.name.includes("JKT48") && item.is_live === true &&
            <div key={idx} className={`item ${idx === 0 ? "column-12 row-1" : "column-12 row-1"}`}>
              <Fade bottom>
                <div className="card card-featured">
                  {item.is_live === true && 
                    <div className="tag" style={{backgroundColor: 'teal'}}>
                      Live <span className="font-weight-light">Now</span>
                    </div>
                  }
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
                      <h5>{item.name}</h5>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}

          {room.map((item, idx) => (
            item.name.includes("JKT48") && 
            <div key={idx} className={`item ${idx === 0 ? "column-12 row-1" : "column-12 row-1"}`}>
              <Fade bottom>
                <div className="card card-featured">
                  {item.is_live === true && 
                    <div className="tag" style={{backgroundColor: 'teal'}}>
                      Live <span className="font-weight-light">Now</span>
                    </div>
                  }
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
