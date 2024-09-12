import { useWeatherState } from '@/hooks/useStoreState'
import './dayInfo.scss'
import BackButton from './backButton/BackButton'
import { useGetDayInfoQuery } from '@/stores/api/weather.api'
import { useParams } from 'react-router-dom'

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

	console.log(dayInfo)

	return (
		<div
			className={`day-info flex flex-col h-screen ${isDay ? 'day' : 'night'}`}
		>
			<BackButton />
			<div className='grid grid-cols-2 w-full h-[calc(100%-100px)] rounded-2xl z-20 overflow-y-scroll mt-14'>
				<div className='flex flex-col p-4 z-20'>
					<div className={`info-card ${isDay ? 'day' : 'night'}`}>
						<img
							src={'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
							alt='weather'
							className={`${isDay ? 'h-full' : ''}`}
						/>
						<p className='temperature'>15°</p>
					</div>
				</div>
				<div className='flex flex-col p-4 z-20'>
					<div className={`info-card ${isDay ? 'day' : 'night'}`}>
						<img
							src={'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
							alt='weather'
							className={`${isDay ? 'h-full' : ''}`}
						/>
						<p className='temperature'>15°</p>
					</div>
				</div>
				<div className='flex flex-col p-4 z-20'>
					<div className={`info-card ${isDay ? 'day' : 'night'}`}>
						<img
							src={'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
							alt='weather'
							className={`${isDay ? 'h-full' : ''}`}
						/>
						<p className='temperature'>15°</p>
					</div>
				</div>
				<div className='flex flex-col p-4 z-20'>
					<div className={`info-card ${isDay ? 'day' : 'night'}`}>
						<img
							src={'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
							alt='weather'
							className={`${isDay ? 'h-full' : ''}`}
						/>
						<p className='temperature'>15°</p>
					</div>
				</div>
				<div className='flex flex-col p-4 z-20'>
					<div className={`info-card ${isDay ? 'day' : 'night'}`}>
						<img
							src={'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
							alt='weather'
							className={`${isDay ? 'h-full' : ''}`}
						/>
						<p className='temperature'>15°</p>
					</div>
				</div>
				<div className='flex flex-col p-4 z-20'>
					<div className={`info-card ${isDay ? 'day' : 'night'}`}>
						<img
							src={'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
							alt='weather'
							className={`${isDay ? 'h-full' : ''}`}
						/>
						<p className='temperature'>15°</p>
					</div>
				</div>
				<div className='flex flex-col p-4 z-20'>
					<div className={`info-card ${isDay ? 'day' : 'night'}`}>
						<img
							src={'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
							alt='weather'
							className={`${isDay ? 'h-full' : ''}`}
						/>
						<p className='temperature'>15°</p>
					</div>
				</div>
				<div className='flex flex-col p-4 z-20'>
					<div className={`info-card ${isDay ? 'day' : 'night'}`}>
						<img
							src={'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
							alt='weather'
							className={`${isDay ? 'h-full' : ''}`}
						/>
						<p className='temperature'>15°</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DayInfo
