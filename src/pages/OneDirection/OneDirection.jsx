import './OneDirection.scss'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { getRequest } from '../../api/index.js'
import block1 from '../../assets/icons/single-spec-image.png'
import block2 from '../../assets/icons/single-spec-image1.png'
import block3 from '../../assets/icons/single-spec-image2.png'
import icon from '../../assets/icons/single-list-icon.svg'

const OneDirection = () => {
	const { t } = useTranslation()
	const { id } = useParams()
	const [directionData, setDirectionData] = useState([])
	const [doctorsData, setDoctorsData] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response1 = await getRequest(
					`directions/${id}/?populate=services`
				)
				const response2 = await getRequest(
					`directions/${id}/?populate=doctors.photo`
				)

				if (response1?.data) {
					console.log(response1.data)
					setDirectionData(response1.data)
				}

				if (response2?.data) {
					console.log(response2.data)
					setDoctorsData(response2.data)
				}
			} catch (error) {
				console.log('Error fetching data:', error)
			}
		}

		fetchData()
	}, [id])

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	console.log(doctorsData?.attributes?.doctors?.data)

	const blockCount = directionData?.attributes?.services?.data
		? Math.ceil(directionData.attributes.services.data.length / 10)
		: 0

	const blockArray = [...Array(blockCount)]

	const images = [block1, block2, block3]
	const getRandomImage = () => {
		const randomImageIndex = Math.floor(Math.random() * images.length)
		return images[randomImageIndex]
	}

	return (
		<>
			<Header />
			<section className='oneDirection'>
				<div className='oneDirection__wrapper'>
					<div className='container'>
						<div className='oneDirection__wrapper'></div>
						<h1 className='oneDirection__title'>
							{directionData?.attributes?.title}
						</h1>
						<div className='oneDirection__inner'>
							{blockArray.map((_, blockIndex) => (
								<div
									className={`oneDirection__item ${
										blockIndex % 2 === 1 ? 'oneDirection__item--swapped' : ''
									}`}
									key={blockIndex}>
									<div className='oneDirection__item_desc'>
										{blockIndex === 0 && (
											<h1>{directionData?.attributes?.title}</h1>
										)}
										{blockIndex === 0 && <h3>Види послуг, що надаються</h3>}
										<div className='oneDirection__list'>
											{directionData?.attributes?.services?.data
												?.slice(blockIndex * 10, (blockIndex + 1) * 10)
												.map((item, itemIndex) => (
													<div
														className='oneDirection__list_item'
														key={itemIndex}>
														<img src={icon} alt='icon' />
														<span>{item?.attributes?.title}</span>
													</div>
												))}
										</div>
									</div>
									{/* <img src={getRandomImage()} alt='about spec' /> */}
								</div>
							))}
						</div>
					</div>
					{doctorsData?.attributes?.doctors?.data?.length ? (
						<div className='ourDirections'>
							<div className='container'>
								<h3>Наші спеціалісти</h3>
								<div className='ourDirections__list'>
									{doctorsData?.attributes?.doctors?.data.map(
										(doctor, index) => (
											<div className='ourDirections__item' key={index}>
												<Link
													to={`/doctors/${doctor.id}`}
													className='ourDirections__item_link'>
														<div className='ourDirections__item_image' style={{backgroundImage: `url(${doctor?.attributes?.photo?.data[0]?.attributes?.url})`}}></div>
													<div className='ourDirections__item_info'>
														<h4 className='ourDirections__item_title'>
															{`${doctor?.attributes?.surname} ${doctor?.attributes?.name} ${doctor?.attributes?.patronymic}`}
														</h4>
														<p className='ourDirections__item_text'>
															{doctor?.attributes?.position}
														</p>
													</div>
												</Link>
											</div>
										)
									)}
								</div>
							</div>
						</div>
					): ''}
				</div>
			</section>
			<Footer />
		</>
	)
}

export default OneDirection
