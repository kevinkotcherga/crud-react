import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from '../components/Article';

const News = () => {

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:3003/articles').then((res) => setNewsData(res.data));
  };

  return (
    <div className='news-container'>
      <h1>News</h1>

      <form>
        <input type='text' placeholder='Nom' />
        <textarea placeholder='Message'></textarea>
        <input type="submit" value="Envoyer" />
      </form>

      <ul>{newsData.map((article) => (
        <Article key={article.id} article={article}/>
      ))}</ul>
    </div>
  );
};

export default News;
