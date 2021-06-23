import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "parts/Header";
import Blog from "parts/article/Blog";

function Article(props) {
  const [article, setArticle] = useState([]);
  const [search, setSearch] = useState('');
  const baseUrl = "https://the-lazy-media-api.vercel.app/api/";
  const articleTags = 'pc';
  const page = '1';
  const api = `${baseUrl}search?search=${search}`

  useEffect(() => {
    window.document.title = "Article";
    axios.get(api).then((res) => {
      const data = res.data;
      setArticle(data)
    });
  }, [api]);

  return (
    <>
      <Header {...props} />
      <div className="container">
        <div className="container mb-4">
          <input className="mb-2" type="text" placeholder=" Search Article" onChange={(e) => {
            setSearch(e.target.value)
          }} />
          <h2>Latest Article</h2>
        </div>
        <Blog data={article} />
      </div>
    </>
  );
}

export default Article;