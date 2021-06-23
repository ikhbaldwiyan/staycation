import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import ReactHtmlParser from "react-html-parser";

import Header from 'parts/Header';
import Breadcrumb from 'elements/Breadcrumb';
import Footer from 'parts/Footer';

function DetailBlog(props) {
  const [detail, setDetail] = useState({});
  const slug = window.location.pathname;

  useEffect(() => {
    window.document.title = detail.title;
    axios
      .get(`https://the-lazy-media-api.vercel.app/api${slug}`)
      .then((res) => {
        const data = res.data.results;
        setDetail(data);
      });
  }, [detail, slug]);

  let description = [];

  if(detail.content) {
    for (let i = 0; i < detail.content.length; i++) {
      let desc = detail.content[i];
      desc += ' <br> <br> '
  
      if (desc.includes('https://thelazy.media')) {
        let image = desc += formatDescription(desc)
        description.push(image)
      }
      
      if (desc.includes(',')) {
        description.push(desc)
      }
    }
  }

  function formatDescription(text) {
    return (text || "").replace(
      /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
      function (match, space, url) {
        let hyperlink = url;
        if (!hyperlink.match("^https?://")) {
          hyperlink = "http://" + hyperlink;
        }
        let image =  hyperlink
        return space + '<img class="img-cover" src="' + image + '" />';
      }
    );
  }

  const breadcrumb = [
    { pageTitle: "Article", pageHref: "/article" },
    { pageTitle: detail.categories && detail.categories[0] , pageHref: "" },
    { pageTitle: detail.categories && detail.categories[1] , pageHref: "" },
  ];


  return (
    <div>
      <Header {...props} />
      <div className="container">
        <section className="container spacing-sm">
          <Fade bottom>
            <div className="row align-items">
              <div className="col-12">
                <Breadcrumb data={breadcrumb} className="mr-3" />
              </div>
              <div className="col-8 text-left">
                <h1 className="h4">{detail.title}</h1>
                <span className="text-gray-500">
                  {detail.author} - {detail.date}
                </span>
              </div>
              <div className="col"></div>
            </div>
          </Fade>
          <div className="container-grid sm mt-3">
            <div className="item column-8">
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
            <div className="row">
              <div className="col-8">
              <p>{ReactHtmlParser(description)}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default DetailBlog;
