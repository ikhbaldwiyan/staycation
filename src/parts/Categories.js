import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((category, idx) => (
    <section className="container" key={idx}>
      {category.itemId.length > 0 && (
        <Fade bottom>
          <h4 className="mb-3 font-weight-medium">{category.name}</h4>
          <div className="container-grid">
            {category.itemId.map((item, idx) => (
              <div className="item column-3 row-1" key={idx}>
                <Fade bottom delay={300 * idx}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={
                          item.imageId[0]
                            ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                            : ""
                        }
                        alt={item.title}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        href={`/properties/${item._id}`}
                        className="strecthed-link d-block text-gray-800"
                      >
                        <h5 className="h4">{item.title}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </Fade>
      )}
    </section>
  ));
}
