import { useState, useEffect } from 'react'
import './LangSwitcher.scss'
import Arrow from '../../assets/iconComponents/Arrow'
import ua from '../../assets/ua.svg'
import de from '../../assets/de.svg'
import en from '../../assets/en.svg'
import { useTranslation } from 'react-i18next'
import { useMediaQuery } from './../../../hooks/useMediaQuery'
import PropTypes from 'prop-types'

const LangSwitcher = ({ lang, setLang }) => {
	const [isOpen, setIsOpen] = useState(false)
	const { i18n } = useTranslation()
	const tabletMobileMatches = useMediaQuery('(max-width:1080px)')

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}
	useEffect(() => {
		const storedLanguage = localStorage.getItem('language')
		if (storedLanguage) {
			if (storedLanguage === 'UA')
				setLang({ code: 'ua', label: 'UA', flag: ua })
			if (storedLanguage === 'DE')
				setLang({ code: 'de', label: 'DE', flag: de })
			if (storedLanguage === 'EN')
				setLang({ code: 'en', label: 'EN', flag: en })
			i18n.changeLanguage(storedLanguage)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleLanguageChange = language => {
		setLang(language)
		i18n.changeLanguage(language.label)
		localStorage.setItem('language', language.label)
		setIsOpen(false)
	}

	const languageOptions = [
		{ code: 'ua', label: 'UA', flag: ua },
		{ code: 'en', label: 'EN', flag: en },
		{ code: 'de', label: 'DE', flag: de },
	]
	const selectedOptionIndex = languageOptions.findIndex(
		option => option.code === lang.code
	)
	if (selectedOptionIndex !== -1) {
		const selectedOption = languageOptions.splice(selectedOptionIndex, 1)
		languageOptions.unshift(selectedOption[0])
	}
	return (
		<div
			className={
				'langSwitcher ' + (tabletMobileMatches ? 'langSwitcherMobile' : '')
			}>
			<div
				className={
					'langSwitcher__button ' + (tabletMobileMatches ? 'hidden' : '')
				}
				onClick={toggleDropdown}>
				<img src={lang.flag} alt={lang.code} />
				<span className='langSwitcher__label'>{lang.label}</span>
				<Arrow />
			</div>
			{(isOpen || tabletMobileMatches) && (
				<ul
					className={
						'langSwitcher__menu ' + (tabletMobileMatches ? 'mobile' : '')
					}>
					{languageOptions.map(option => (
						<li
							key={option.code}
							className={`langSwitcher__menu_option`}
							onClick={() => handleLanguageChange(option)}>
							<img src={option.flag} alt={option.code} /> {option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

LangSwitcher.propTypes = {
	lang: PropTypes.exact({
		code: PropTypes.oneOf(['ua', 'en', 'de']),
		label: PropTypes.oneOf(['UA', 'EN', 'DE']),
		flag: PropTypes.string,
	}),
	setLang: PropTypes.func,
}

export default LangSwitcher
