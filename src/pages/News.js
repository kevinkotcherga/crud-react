import React from 'react';

const News = () => {
  return (
    <div className='news-container'>
      <h1>News</h1>

      <form>
        <input type='text' placeholder='Nom' />
        <textarea placeholder='Message'></textarea>
        <input type="submit" value="Envoyer" />
      </form>

      <ul></ul>
    </div>
  );
};

export default News;
