import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';
import SkeletonRelated from 'components/Skeleton/SkeletonRelated';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const baseUrl = 'https://the-lazy-media-api.vercel.app/api';

  useEffect(() => {
    axios.get(`${baseUrl}/games/news?page=1`).then((res) => {
      const data = res.data;
      setCategories(data);
    });
  }, [categories]);

  return (
    <div className="container mt-4 mb-4">
      <h4 className="mb-3 font-weight-medium">Lazy News</h4>
      {categories && categories.length ? (
        <Fade bottom>
          <div className="container-grid">
            {categories.slice(0, 8).map((item, idx) => (
              <div className="item column-3 row-1" key={idx}>
                <Fade bottom delay={300 * idx}>
                  <div className="card">
                    <div className="tag-article">{item.tag}</div>
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.thumb}
                        alt={item.title}
                        className="img-cover"
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
                      <span className="text-gray-500">
                        {item.author === 'Aldy Wayong'
                          ? 'Ikhbal Dwiyantoro'
                          : item.author}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </Fade>
      ) : (
        <SkeletonRelated />
      )}
    </div>
  );
}
