import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "parts/Header";
import Blog from "parts/article/Blog";

function Article(props) {
  const [article, setArticle] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  
  const baseUrl = "https://the-lazy-media-api.vercel.app/api/";
  const api = `${baseUrl}search?search=${search}`

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [search])

  useEffect(() => {
    window.document.title = "Article";
    axios.get(api).then((res) => {
      const data = res.data;
      setArticle(data)
    });
  }, [api]);

  const searchArticle = (e) => {
    setLoading(true)
    setSearch(e.target.value)
  }

  return (
    <>
      <Header {...props} />
      <div className="container">
        <div className="container mb-4">
          <input className="mb-2" type="text" placeholder=" Search Article" onChange={searchArticle} />
          <h2>Latest Articles</h2>
        </div>
        <Blog data={article} loading={loading} />
      </div>
    </>
  );
}

export default Article;