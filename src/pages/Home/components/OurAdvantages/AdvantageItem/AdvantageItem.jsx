import './AdvantageItem.scss'
import PropTypes from 'prop-types'
import FamilyIcon from '../../../../../assets/iconComponents/FamilyIcon.jsx'
const AdvantageItem = ({ title, text }) => {
	return (
		<div className='advantage'>
			<div className='advantage__circle'>
				<FamilyIcon />
			</div>
			<div className='advantage__info'>
				<h5 className='advantage__title'>{title}</h5>
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
