import "./App.css";
import { useEffect, useState } from "react";

const fetchAPI = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=41e06e4589bc499d840c6f5aad1630e2";
  const data = await fetch(url);
  const parsedData = await data.json();
  console.log(parsedData);
  return parsedData.articles;
};

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const newsArticles = await fetchAPI();
      setArticles(newsArticles.slice(0, 3));
    };

    fetchData();
    return () => {};
  }, []);

  return (
    <div className="App">
      <ul className="display">
        {articles.map((article, index) => (
          <div key={index}>
            <a href={article.url} target="_blank" className="titles">
              <h1 className="titles">{article.title}</h1>
            </a>
            {/* <p>{article.description}</p> */}
            <img src={article.urlToImage} alt="image" className="images" />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
