import React from "react";
import Fade from "react-reveal/Fade";
import ReactHtmlParser from "react-html-parser";
import Button from "elements/Button";

export default function Blog({ data }) {
  return data.map((article, idx) => (
    <section className="container">
      <div className="container-grid sm">
        <Fade bottom delay={300 * idx}>
          <div className="item column-4 mr-3">
            <div className="card h-100">
              <div className="tag" style={{borderRadius: '0 10px'}}>
                {article.category}
              </div>
              <figure className="img-article">
                <img className="img-cover" src={article.url} alt={data.id} />
              </figure>
            </div>
          </div>
          <div className="item column-7">
            <h3>{article.title}</h3>
            <span className="text-gray-500">
              {article.author}, {article.published}
            </span>
            <p className="mt-3 text-gray-700">
              {ReactHtmlParser(article.desc)}
            </p>
            <p className="mt-3 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              assumenda, fuga odio deleniti amet laboriosam rem labore nulla
              eveniet voluptatum pariatur unde sunt fugit ipsa recusandae
              provident ut accusantium voluptas?
            </p>
            <Button type="link" className="btn" isPrimary>
              Read More
            </Button>
          </div>
        </Fade>
      </div>
    </section>
  ));
}
