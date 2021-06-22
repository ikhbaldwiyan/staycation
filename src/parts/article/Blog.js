import React from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Button from "elements/Button";
import IconDate from "assets/images/icons/icon_cities.svg";

export default function Blog({ data }) {
  return data.map((article, idx) => (
    <section className="container">
      <div className="container-grid sm">
        <Fade bottom>
          <div className="item column-4 mr-3">
            <div className="card h-100">
              <div className="tag-article">{article.tag}</div>
              <figure className="img-article">
                <img className="img-cover" src={article.thumb} alt={idx} />
              </figure>
            </div>
          </div>
          <div className="item column-6">
            <h3>{article.title}</h3>
            <span className="text-gray-500">
              <img src={IconDate} width={18} className="ml-2 mb-1" alt="date" />{" "}
              {article.author} |  {article.time}
            </span>
            <p className="mt-3">
              {ReactHtmlParser(article.desc)}
            </p>
            <Button type="link" href={`detail/${article.key}`} className="btn" isPrimary>
              Read More
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  ));
}
