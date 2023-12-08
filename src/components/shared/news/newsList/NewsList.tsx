import { newsData } from "./news.data";
import NewsItem from "./newsItem/NewsItem";

const NewsList = () => {
    return (
        <ul className="listview">
            {newsData.map(news => (
                <NewsItem key={news.id} news={news} />
            ))}
        </ul>
    )
}

export default NewsList;