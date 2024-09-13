import { useWeatherState } from '@/hooks/useStoreState'
import { BackButton } from './backButton/BackButton'
import { useGetDayInfoQuery } from '@/stores/api/weather.api'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { InfoAboutDay } from '@/components/infoAboutDay/InfoAboutDay'

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

	console.log(dayInfo)

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
					<div className='flex flex-col w-full mt-14'>
						<InfoAboutDay forecast={dayInfo!} />
					</div>

					<div className='grid grid-cols-2 rounded-2xl z-20 overflow-y-scroll'>
						<div className={`info-card ${isDay ? 'day' : 'night'}`}>
							<p className='option'>Humidity</p>
							<p className='characteristic'>
								{dayInfo.forecast.forecastday[0].day.avghumidity}
							</p>
						</div>
						<div className={`info-card ${isDay ? 'day' : 'night'}`}>
							<p className='option'>Avg Temp</p>
							<p className='characteristic'>
								{dayInfo.forecast.forecastday[0].day.avgtemp_c}
							</p>
						</div>
						<div className={`info-card ${isDay ? 'day' : 'night'}`}>
							<p className='option'>Rain chance</p>
							<p className='characteristic'>
								{dayInfo.forecast.forecastday[0].day.daily_chance_of_rain}
							</p>
						</div>
						<div className={`info-card ${isDay ? 'day' : 'night'}`}>
							<p className='option'>Snow chance</p>
							<p className='characteristic'>
								{dayInfo.forecast.forecastday[0].day.daily_chance_of_snow}
							</p>
						</div>
						<div className={`info-card ${isDay ? 'day' : 'night'}`}>
							<p className='option'>Max wind speed</p>
							<p className='characteristic'>
								{dayInfo.forecast.forecastday[0].day.maxwind_mph} mph
							</p>
						</div>
						<div className={`info-card ${isDay ? 'day' : 'night'}`}>
							<p className='option'>UV index</p>
							<p className='characteristic'>
								{dayInfo.forecast.forecastday[0].day.uv}
							</p>
						</div>
					</div>
					{/* <div className='grid grid-cols-2 w-full h-[calc(100%-100px)]   rounded-2xl z-20 overflow-y-scroll mt-14'>
						<div className='flex flex-col p-4 z-20 items-center'>
							<div className={`info-card ${isDay ? 'day' : 'night'}`}>
								<img
									src={'https://cdn.weatherapi.com/weather/64x64/day/113.png'}
									alt='weather'
									className={`${isDay ? 'h-full' : ''}`}
								/>
								<p className='temperature'>15°</p>
							</div>
						</div>
					</div> */}
				</>
			)}
		</div>
	)
}

export default DayInfo
