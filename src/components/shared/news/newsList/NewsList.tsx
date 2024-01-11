import { INews } from '../../../../shared/interfaces/news.interface'
// import { newsData } from "./news.data";
import NewsItem from './newsItem/NewsItem'

interface Props {
	news: INews[]
}

const NewsList = ({ news }: Props) => {
	console.log(news)

	return (
		<ul className='listview'>
			{news?.map(news => (
				<NewsItem key={news.id} news={news} />
			))}
		</ul>
	)
}

export default NewsList
