import Button from '../../../../components/Button/Button.jsx'
import './Banner.scss'
import { useTranslation } from 'react-i18next'
const Banner = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className='banner'>
				<div className='container'>
					<div className='info__wrapper'>
						<div className='info'>
							<h1 className='info__title'>{t('Клініка сімейний лікар')}</h1>
							<p className='info__text'>
								{t(
									'Клініка сімейний лікар» - це результат якісної роботи, місце, де ми зібрали все найкраще за для захисту вашого здоров’я ! Клініка «Сімейний лікар» поруч з вами від народження та на протязі всього життя!'
								)}
							</p>
							<div className='info__btn'>
								<Button
									text='Обрати Напрямок'
									color='choose default'
									to='/doctors'
								/>

								<Button
									text='Дізнатися більше'
									color='transparent'
									to='/about'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Banner
