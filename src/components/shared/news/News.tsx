import { useEffect, useState } from "react";
import NewsList from "./newsList/NewsList";
import { newsService } from "../../../services/news.service";
import { INews } from "../../../shared/interfaces/news.interface";
import { authService } from "../../../services/auth.service";

const News = () => {
    const [news, setNews] = useState<INews[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // await authService.verify();

                // Once authenticated, fetch news
                const response = await newsService.fetchNews();
                console.log(response);
                setNews(response.data.news);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchData();
    }, []);

    
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Новости</h4>
                <NewsList news={news} />
            </div>
        </div>
    );
}

export default News;