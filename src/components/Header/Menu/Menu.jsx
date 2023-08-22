/* eslint-disable react/prop-types */
import './Menu.scss'
import LangSwitcher from '../../LangSwitcher/LangSwitcher'

import { Link, useLocation } from 'react-router-dom'
import Button from '../../Button/Button.jsx'

import Geo from '../../../assets/iconComponents/Geo.jsx'
import { useTranslation } from 'react-i18next'
const Menu = ({ handleMenuClick, lang, setLang }) => {
	const location = useLocation()
	const { t } = useTranslation()
	return (
		<>
			<nav className='menu'>
				<div className='container'>
					<div className='menu__inner'>
						<ul className='menu__list'>
							<li>
								<Link
									to='/directions'
									onClick={handleMenuClick}
									className={
										location.pathname === '/directions' ? `location` : ``
									}>
									{t('Напрямки')}
								</Link>
							</li>
							<li>
								<Link
									to='/doctors'
									onClick={handleMenuClick}
									className={
										location.pathname === '/doctors' ? `location` : ``
									}>
									{t('Лікарі')}
								</Link>
							</li>
							<li>
								<Link
									to='/about'
									onClick={handleMenuClick}
									className={location.pathname === '/about' ? `location` : ``}>
									{t('Про нас')}
								</Link>
							</li>
							<li>
								<Link
									to='/for-companies'
									onClick={handleMenuClick}
									className={
										location.pathname === '/for-companies' ? `location` : ``
									}>
									{t('Для компаній')}
								</Link>
							</li>
							<li>
								<Link
									to='/news'
									onClick={handleMenuClick}
									className={location.pathname === '/news' ? `location` : ``}>
									{t('Новини')}
								</Link>
							</li>
							<li>
								<Link
									to='/contact'
									onClick={handleMenuClick}
									className={
										location.pathname === '/contact' ? `location` : ``
									}>
									{t('Контакти')}
								</Link>
							</li>
							<li>
								<Link
									to='/photogallery'
									onClick={handleMenuClick}
									className={
										location.pathname === '/photogallery' ? `location` : ``
									}>
									{t('Фотогалерея')}
								</Link>
							</li>
						</ul>
						<div>
							<LangSwitcher lang={lang} setLang={setLang} />
							<div className='menu__geo'>
								<Geo color='#444444' />
								<p>{t('м. Запоріжжя, вул. Лікарняна, 18')}.</p>
							</div>

							<Button
								to='/form'
								text='Запис на прийом'
								color='choose default'
								onClick={handleMenuClick}
							/>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Menu
