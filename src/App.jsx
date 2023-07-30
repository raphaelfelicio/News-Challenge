
// import NewsStories from "./Components/NewsStories";
import Footer from "./Components/Footer";
import NewsSummary from "./Components/NewsSummary";
import Header from "./Components/header";
import { getNews } from './utils/newsDataService';
import { useEffect, useState } from "react";
function App()
{
  const [newsStories, setNews] = useState([]);

  const getData = async () =>
  {
    const data = await getNews()
    if (data instanceof Error)
    {
      setNews([]);
    } else
    {
      setNews(data.response.results);
    }
  }
  useEffect(() =>
  {
    getData();
  }, []);


  return (
    <>
      <Header />
      <div>
        <NewsSummary newsStories={newsStories} />
      </div>
      <Footer />
    </>
  )

}

export default App
