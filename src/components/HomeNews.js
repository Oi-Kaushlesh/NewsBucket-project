import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Loader from './Loader';

const HomeNews = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHomeNews = async () => {
    props.setProgress(10);
    const url = 'https://newsapi.org/v2/everything?q=apple&from=2024-08-19&to=2024-08-19&sortBy=popularity&apiKey=080dbe4c0a444b2fab00c83a2a735912';
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);

    if (parsedData.articles) {
      setArticles(parsedData.articles);
    } else {
      setArticles([]);
    }

    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    fetchHomeNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>
        Home - Latest News
      </h1>
      {loading && <Loader />}
      <div className="container">
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ''}
                description={element.description ? element.description : ''}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeNews;
