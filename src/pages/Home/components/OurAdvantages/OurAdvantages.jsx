import './OurAdvantages.scss'
import { ADVANTAGES_DATA } from '../../../../assets/dummy/dummy-data.jsx'
import AdvantageItem from './AdvantageItem/AdvantageItem.jsx'
import { useTranslation } from 'react-i18next'
const OurAdvantages = () => {
	const { t } = useTranslation()
	return (
		<div className='advantages'>
			<div className='container'>
				<h2 className='advantages__title'>
					{t('Чому вам варто обрати Сімейну Лікарню?')}
				</h2>
				<div className='advantages__list'>
					{ADVANTAGES_DATA.map((advantage, index) => (
						<AdvantageItem
							title={advantage.title}
							text={advantage.text}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default OurAdvantages
