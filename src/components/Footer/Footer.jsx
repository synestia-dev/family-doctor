import './Footer.scss'
import footerLogo from '../../assets/icons/footer-logo.svg'
import geo from '../../assets/icons/geo.svg'
import phone from '../../assets/icons/phone.svg'
import mail from '../../assets/icons/mail.svg'
import { BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Button from '../Button/Button.jsx'
import { useTranslation } from 'react-i18next'
const Footer = () => {
	const { t } = useTranslation()

	console.log(t('Пн-Пт:'))

	return (
		<div className='footer'>
			<div className='container'>
				<div className='row'>
					<div className='row__item'>
						<h6 className='row__title'>{t('Час роботи')}</h6>
						<div className='schedule'>
							<div>
								{t('Пн')}-{t('Пт')}:
							</div>
							<div>8:00-20:00</div>
							<div>{t('Сб')}:</div>
							<div>9:00-13:00</div>
							<div>{t('Нд')}:</div>
							<div>{t('Вихідний')}</div>
						</div>
						<h6 className='address '>{t('Адреса')}</h6>
						<div className='address__inner'>
							<p className='address__info'>
								<img src={geo} alt='geo' />
								<a
									href='https://www.google.com/maps/search/?api=1&query=%D0%BC.+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D1%96%D0%B6%D0%B6%D1%8F%2C+%D0%B2%D1%83%D0%BB.+%D0%9B%D1%96%D0%BA%D0%B0%D1%80%D0%BD%D1%8F%D0%BD%D0%B0%2C+18.'
									target='_blank'
									rel='noopener noreferrer'>
									{t('місто Запоріжжя, вулиця Лікарняна 18, 69089.')}
								</a>
							</p>
							<a href='/contacts/#map' className='address__info_map'>
								{t('Показать на карте')}
							</a>
						</div>
					</div>
					<div className='row__item'>
						<h6 className='row__title'>{t('Про нас')}</h6>
						<nav>
							<ul className='about__list'>
								<li>
									<Link to='/about'>{t('Клініка')}</Link>
								</li>
								<li>
									<Link to='/photogallery'>{t('Фотогалерея')}</Link>
								</li>
								<li>
									<Link to='/news'>{t('Новини')}</Link>
								</li>
								<li>
									<Link to='/doctors' className=''>
										{t('Наша команда')}
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className='row__item'>
						<h6 className='row__title'>{t('Контакти')}</h6>
						<a href='tel:+380731888103' className='contacts'>
							<img src={phone} alt={phone} />
							<p className='contacts__item'>+38 (073) 188-81-03</p>
							<span className='contacts__item_mobile'>+38 (073) 188-81-03</span>
						</a>
						<br />
						<a href='tel:+380961888003' className='contacts'>
							<img src={phone} alt={phone} />
							<span className='contacts__item'>+38 (096) 188-80-03</span>
							<span className='contacts__item_mobile'>+38 (096) 188-80-03</span>
						</a>
						<br />
						<a href='tel:+380991888003' className='contacts'>
							<img src={phone} alt={phone} />
							<p className='contacts__item'>+38 (099) 188-80-03</p>
							<span className='contacts__item_mobile'>+38 (099) 188-80-03</span>
						</a>
						<br />
						<a href='mailto:shyroke_likar@ukr.net' className='contacts'>
							<img src={mail} alt={mail} />
							shyroke_likar@ukr.net
						</a>
					</div>
					<div className='row__item social_item'>
						<h6 className='row__title socials__title'>
							{t('Соціальні мережі')}
						</h6>
						<nav>
							<ul className='socials'>
								<li>
									<a
										href='https://www.instagram.com'
										target='_blank'
										rel='noopener noreferrer'>
										<RiInstagramFill size={22} />
									</a>
								</li>
								<li>
									<a
										href='https://t.me'
										target='_blank'
										rel='noopener noreferrer'>
										<BsTelegram size={21} />
									</a>
								</li>
								<li>
									<a
										href='https://www.instagram.com'
										target='_blank'
										rel='noopener noreferrer'>
										<BsInstagram size={22} />
									</a>
								</li>
								<li>
									<a
										href='https://www.facebook.com'
										target='_blank'
										rel='noopener noreferrer'>
										<BsFacebook size={21} />
									</a>
								</li>
							</ul>
							<div className='public'>
								<h6 className='row__title public__title'>
									{t('Доступ до публічної')} <br />
									{t('інформації')}
								</h6>
								<div>
									<Button text='Читати' color='read' to='/public-info' />
								</div>
							</div>
						</nav>
					</div>
				</div>
				<div className='footer-logo'>
					<div className='line line-left'></div>
					<img src={footerLogo} alt={footerLogo} />
					<div className='line line-right'></div>
				</div>
			</div>
		</div>
	)
}

export default Footer
