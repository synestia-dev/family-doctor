import './AdvantageItem.scss'
import PropTypes from 'prop-types'
import FamilyIcon from '../../../../../assets/iconComponents/FamilyIcon.jsx'
import { useTranslation } from 'react-i18next'
const AdvantageItem = ({ title, text }) => {
	const { t } = useTranslation()
	return (
		<div className='advantage'>
			<div className='advantage__circle'>
				<FamilyIcon />
			</div>
			<div className='advantage__info'>
				<h5 className='advantage__title'>{t(title)}</h5>
				{/* <p className='advantage__text'>{title}</p> */}
			</div>
		</div>
	)
}

AdvantageItem.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default AdvantageItem
