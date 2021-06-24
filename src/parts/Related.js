import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import SkeletonRelated from 'components/Skeleton/SkeletonRelated';

function Related({ categories, setLoading }) {
  const [related, setRelated] = useState([]);
  const [category, setCategory] = useState(categories);
  const [path, setPath] = useState('games/')

  const baseUrl = "https://the-lazy-media-api.vercel.app/api/";
  const api = `${baseUrl}${path}${category}/?page=1`

  useEffect(() => {
    axios.get(api).then(res => { 
      const data = res.data;
      setRelated(data)
    });
  }, [category]);

  useEffect(() => {
    if (category === 'game news') {
      setCategory('news')
    } else if(category === 'esports') {
      setCategory('e-sport')
    } else if(category === 'console') {
      setCategory('console-game')
    } else if (category === 'gadget news' && category === 'tech review') {
      setCategory('pc')
    } else if (category === 'tech' || category === 'tech recommendations' || category === 'setup' || category === 'tech news' || category === 'tech review') {
      setCategory('')
      setPath('tech')
    }
  })

  return (
    <section className="container">
      <h3>Related Article</h3>
      <div className="container-grid">
        {related && related.length ? related.slice(2).map((item, idx) => (
          item.key !== window.location.pathname.slice(8) &&
          <div className="item column-3 row-1 mt-3" key={idx}>
            <Fade bottom delay={300 * idx}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 180 }}>
                  <img
                    alt={item.title}
                    className="img-contain"
                    src={item.thumb}
                  />
                </figure>
                <div className="meta-wrapper">
                  <Link
                    to={`/detail/${item.key}`}
                    className="strecthed-link d-block text-gray-800"
                    style={{textDecoration: 'none'}}
                  >
                    <h5 className="h4" onClick={ () => setLoading(true) }>{item.title}</h5>
                  </Link>
                </div>
              </div>
            </Fade>
          </div>
        )) : (
          <SkeletonRelated />
        )}
      </div>
    </section>
  );
}

export default Related;
