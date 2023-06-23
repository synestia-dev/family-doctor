import './NewsList.scss'
import NewsItem from './NewsItem/NewsItem.jsx'
import { useEffect, useState } from 'react'
import { getRequest } from '../../api/index.js'
import Loader from '../Loader/Loader.jsx'
import { useTranslation } from 'react-i18next'

const NewsList = ({ count }) => {
	const [newsData, setNewsData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const { t } = useTranslation()
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getRequest('news?populate=image')
				if (response && response.data) {
					console.log(response.data)
					return setNewsData(response.data)
				}
			} catch (error) {
				console.log('Error fetching directions data:', error)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [])

	const displayedNews = count ? newsData.slice(0, count) : newsData
	return (
		<div className='newsList'>
			<div className='container'>
				<h2 className='newsList__title'>{t('Новини')}</h2>
				{isLoading ? (
					<div className='loader'>
						<Loader />
					</div>
				) : (
					<div className='newsList__list'>
						{displayedNews?.map((newsItem, index) => (
							<NewsItem
								key={index}
								id={newsItem.id}
								date={newsItem.attributes?.date}
								image={newsItem.attributes?.image?.data[0].attributes?.url}
								title={newsItem.attributes.title}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default NewsList
