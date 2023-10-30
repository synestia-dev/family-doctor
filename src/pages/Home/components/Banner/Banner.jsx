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
							<div>
								<p className='info__text'>
									{t(
										'Клініка “Сімейний лікар” - доступна медицина від команди найкращих спеціалістів'
									)}
								</p>
								<p className='info__text'>
									{t(
										'Ми об’єднали сімейність і сучасні технології, щоб надати вам якісну діагностику та лікування у комфортних умовах.'
									)}
								</p>
								<p className='info__text'>
									{t('Ваше здоров’я – наш пріоритет.')}
								</p>
								<p className='info__text'>
									{t('Сімейний лікар - МИ ЗАВЖДИ ПОРУЧ!')}
								</p>
							</div>

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
