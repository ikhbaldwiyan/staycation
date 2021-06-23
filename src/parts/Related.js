import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

function Related({ categories }) {
  const [related, setRelated] = useState([])
  const baseUrl = "https://the-lazy-media-api.vercel.app/api/";

  useEffect(() => {
    window.document.title = "Article";
    axios.get(`${baseUrl}games/${articleData}/?page=2`).then(res => { 
      const data = res.data;
      setRelated(data)
    });
  });

  let articleData = categories 
  if (articleData === 'game news') {
    articleData = 'news'
  } else if(articleData === 'esports') {
    articleData = 'e-sport'
  } else if(articleData === 'console') {
    articleData = 'console-game'
  }

  return (
    <section className="container">
      <h3>Related Article</h3>
      <div className="container-grid">
        {related && related.length && related.slice(2).map((item, idx) => (
          item.key !== window.location.pathname.slice(8) &&
          <div className="item column-3 row-1 mt-3">
            {console.log(window.location.pathname.slice(8))}
            <Fade bottom>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 180 }}>
                  <img
                    alt={item.title}
                    className="img-cover"
                    src={item.thumb}
                  />
                </figure>
                <div className="meta-wrapper">
                  <Button
                    type="link"
                    href={`/detail/${item.key}`}
                    className="strecthed-link d-block text-gray-800"
                  >
                    <h5 className="h4">{item.title}</h5>
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

export default Related;
