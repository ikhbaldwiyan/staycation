import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import ReactHtmlParser from "react-html-parser";

import Header from 'parts/Header';
import Breadcrumb from 'elements/Breadcrumb';

function DetailBlog(props) {
  const [detail, setDetail] = useState({});
  const slug = window.location.pathname;

  useEffect(() => {
    window.document.title = 'Detail Artikel';
    axios
      .get(`https://the-lazy-media-api.vercel.app/api${slug}`)
      .then((res) => {
        const data = res.data.results;
        setDetail(data);
      });
    console.log(detail);
  }, []);

  const breadcrumb = [
    { pageTitle: "Article", pageHref: "/article" },
    { pageTitle: detail.categories && detail.categories[0] , pageHref: "" },
  ];

  const description = detail.content;

  return (
    <div>
      <Header {...props} />
      <section className="container spacing-sm">
        <Fade bottom>
          <div className="row align-items">
            <div className="col">
              <Breadcrumb data={breadcrumb} />
            </div>
            <div className="col-auto text-center">
              <h1 className="h4">{detail.title}</h1>
              <span className="text-gray-500">
                {detail.author}, {detail.date}
              </span>
            </div>
            <div className="col"></div>
          </div>
        </Fade>
        <div className="container-grid sm mt-3">
          <div className="item column-12">
            <div className="card h-100">
              <figure className="img-wrapper">
                <img
                  className="img-cover"
                  src={detail.thumb ?? 'https://i.stack.imgur.com/y9DpT.jpg'}
                  alt={detail.title}
                />
              </figure>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <p>{description}</p>
        </div>
      </section>
    </div>
  );
}

export default DetailBlog;
