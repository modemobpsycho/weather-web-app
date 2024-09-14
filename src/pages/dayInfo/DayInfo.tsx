import { InfoAboutDayHeader } from '@/components/infoAboutDay/header/InfoAboutDayHeader'
import { InfoAboutDayFooter } from '@/components/infoAboutDay/footer/InfoAboutDayFooter'
import { BackButton } from './backButton/BackButton'
import { useWeatherState } from '@/hooks/useStoreState'
import { useGetDayInfoQuery } from '@/stores/api/weather.api'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

import './dayInfo.scss'

function DayInfo() {
	const { day } = useParams()
	const { isDay, city } = useWeatherState()
	const { data: dayInfo } = useGetDayInfoQuery(
		{
			city: city || 'Minsk',
			dt: day!,
		},
		{ skip: !day }
	)

	return (
		<div
			className={`day-info flex flex-col h-screen ${isDay ? 'day' : 'night'}`}
		>
			<BackButton />
			{!dayInfo ? (
				<div className='flex h-full items-center justify-center'>
					<CircularProgress />
				</div>
			) : (
				<>
					<InfoAboutDayHeader dayInfo={dayInfo!} />
					<InfoAboutDayFooter dayInfo={dayInfo!} />
				</>
			)}
		</div>
	)
}

export default DayInfo
