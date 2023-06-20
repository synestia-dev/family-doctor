import './Header.scss'
import Preheader from './Preheader/Preheader'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import LangSwitcher from '../LangSwitcher/LangSwitcher'

import { useTranslation } from 'react-i18next'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'

import { useEffect, useState } from 'react'
import Menu from './Menu/Menu.jsx'

import { ReactComponent as PhoneIcon } from './../../assets/icons/phone.svg'
import { ReactComponent as MailIcon } from './../../assets/icons/mail.svg'
import { useMediaQuery } from '../../../hooks/useMediaQuery'

import ua from '../../assets/ua.svg'

const Header = () => {
	const { t } = useTranslation()
	const [isOpen, setIsOpen] = useState(false)
	const handleMenuClick = () => {
		setIsOpen(prev => !prev)
		!isOpen
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'scroll')
	}

	const handleMenuClose = () => {
		setIsOpen(false)
		document.body.style.overflow = 'scroll'
	}

	const DesktopMatches = useMediaQuery('(min-width:1080px)')
	const SmallScreenMatches = useMediaQuery('(max-width:340px)')
	useEffect(() => {
		DesktopMatches && isOpen && handleMenuClick()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [DesktopMatches])

	const [lang, setLang] = useState({ code: 'ua', label: 'UA', flag: ua })

	return (
		<>
			<Preheader />
			<div className='header'>
				<div className='container'>
					<nav className='header__inner'>
						<div className='header__logo'>
							<Link to='/' onClick={!DesktopMatches && handleMenuClose}>
								<img src={logo} alt='logo' />
							</Link>
						</div>
						<div className='header__menu'>
							<ul className='header__menu_list'>
								<li>
									<Link to='/directions'>{t('Напрямки')}</Link>
								</li>
								<li>
									<Link to='/doctors'>{t('Лікарі')}</Link>
								</li>
								<li>
									<Link to='/about'>{t('Про нас')}</Link>
								</li>
								<li>
									<Link to='/for-companies'>{t('Для компаній')}</Link>
								</li>
								<li>
									<Link to='/news'>{t('Новини')}</Link>
								</li>
								<li>
									<Link to='/contact'>{t('Контакти')}</Link>
								</li>
								<li>
									<Link to='/photogallery'>{t('Фотогалерея')}</Link>
								</li>
							</ul>
							<div className='separator'></div>
							<LangSwitcher lang={lang} setLang={setLang} />
						</div>
						<div className='header__navigation'>
							<div
								className={
									'header__navigation_icons ' + (isOpen ? 'hidden' : '')
								}>
								<Link to='tel:+380681888103'>
									<PhoneIcon />
								</Link>
								<Link to='mailto:shyroke_likar@ukr.net'>
									<MailIcon />
								</Link>
							</div>
							<button className='header__burger' onClick={handleMenuClick}>
								{isOpen ? (
									<RxCross1 size={21} color={'#F8F8F8'} />
								) : (
									<RxHamburgerMenu size={21} color={'#F8F8F8'} />
								)}
							</button>
						</div>

						<Button
							to='/form'
							text='Запис на прийом'
							color='choose default remove'
						/>
					</nav>
				</div>
				{isOpen && (
					<Menu
						handleMenuClick={handleMenuClick}
						lang={lang}
						setLang={setLang}
					/>
				)}
			</div>
		</>
	)
}

export default Header
