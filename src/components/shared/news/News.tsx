import NewsList from "./newsList/NewsList";

const News = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Новости</h4>
                <NewsList />
            </div>
        </div>
    );
}

export default News;