import { useTranslation } from 'react-i18next'
import './DoctorsItem.scss'
import PropTypes from 'prop-types'

const DoctorsItem = ({ itemData }) => {
	const positionText = itemData.head
		? 'завідувач відділення, ' + itemData.position
		: itemData.position + (itemData.childrens ? ', дитячий' : '')

	const { t } = useTranslation()

	return (
		<div className='person'>
			<img
				className='person__image'
				src={itemData.photo.data[0].attributes.url}
				alt='icon'
			/>
			<div className='person__info'>
				<h4 className='person__title'>
					{t(itemData.surname)} {t(itemData.name)} {t(itemData.patronymic)}
				</h4>
				<p className='person__text'>{t(positionText)}</p>
			</div>
		</div>
	)
}
DoctorsItem.propTypes = {
	itemData: PropTypes.shape({
		photo: PropTypes.shape({
			data: PropTypes.arrayOf(
				PropTypes.shape({
					attributes: PropTypes.shape({
						url: PropTypes.string.isRequired,
					}).isRequired,
				})
			).isRequired,
		}).isRequired,
		name: PropTypes.string.isRequired,
		surname: PropTypes.string.isRequired,
		patronymic: PropTypes.string.isRequired,
		position: PropTypes.string.isRequired,
		head: PropTypes.bool.isRequired,
		childrens: PropTypes.bool.isRequired,
	}).isRequired,
}

export default DoctorsItem
