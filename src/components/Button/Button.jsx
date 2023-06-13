/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Button.scss'
import { useTranslation } from 'react-i18next'
const Button = ({ to = '', text, color = 'default', icon = null, onClick }) => {
	const { t } = useTranslation()
	return (
		<Link to={to} className={`button ${color}`} onClick={onClick}>
			{icon !== null && <img src={icon} alt='icon' />}
			{t(text)}
		</Link>
	)
}

export default Button
