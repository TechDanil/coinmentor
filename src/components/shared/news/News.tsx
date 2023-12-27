import { useEffect, useState } from 'react'
import { newsService } from '../../../services/news.service'
import { INewsResponse } from '../../../shared/interfaces/news.interface'
import NewsList from './newsList/NewsList'

const News = () => {
	const [news, setNews] = useState<INewsResponse[]>([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await newsService
					.fetchNews()
					.then(res => setNews(res.data))
				console.log(response)
			} catch (error) {
				console.error('Error fetching news:', error)
			}
		}

		fetchData()
	}, [])

	console.log(news)

	return (
		<div className='card'>
			<div className='card-body'>
				<h4 className='card-title'>Новости</h4>
				<NewsList news={news} />
			</div>
		</div>
	)
}

export default News
