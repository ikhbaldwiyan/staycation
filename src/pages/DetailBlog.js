import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import ReactHtmlParser from "react-html-parser";

import Header from 'parts/Header';
import Breadcrumb from 'elements/Breadcrumb';
import Footer from 'parts/Footer';
import Related from 'parts/Related';
import SkeletonDetail from 'components/Skeleton/SkeletonDetail';

function DetailBlog(props) {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true)
  const slug = window.location.pathname;

  useEffect(async () => {
    window.scrollTo(0,0);
    await axios.get(`https://the-lazy-media-api.vercel.app/api${slug}`)
      .then((res) => {
        const data = res.data.results;
        setDetail(data);
      });
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }, [slug]);
    
  useEffect(() => {
    window.document.title = detail.title;
  }, [detail.title])
    
  let description = [];

  if(detail.content) {
    for (let i = 0; i < detail.content.length; i++) {
      if(!detail.content[i].includes('https://thelazy.media')) {
        let desc = detail.content[i];
        desc += ' <br> <br> ';
        description.push(desc);
      }
    }
  }

  const dataRelated = detail.categories && detail.categories[1].toLowerCase();

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
            {loading ? 
              <div className="row">
                <div className="col-8 mt-3">
                  <SkeletonDetail />
                </div>
              </div> :
              <>
                <Fade>
                  <div className="row align-items">
                    <div className="col-12">
                      <Breadcrumb data={breadcrumb} className="mr-3" />
                    </div>
                    <div className="col-8 text-left">
                      <h1 className="h3">{detail.title}</h1>
                      <span className="text-gray-500">
                        <span className="text-gray-600">{detail.author}</span> - {detail.date}
                      </span>
                    </div>
                    <div className="col"></div>
                  </div>
                </Fade>
                <div className="container-grid sm mt-3">
                  <div className="item column-8">
                    <div className="card">
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
                <div>
                  <div className="row">
                    <div className="col-8">
                      <p>{ReactHtmlParser(description)}</p>
                    </div>
                      <Related categories={dataRelated} setLoading={setLoading} />
                  </div>
                </div>
              </>
            }
          </section>
        </div>
      <Footer />
    </div>
  );
}

export default DetailBlog;
