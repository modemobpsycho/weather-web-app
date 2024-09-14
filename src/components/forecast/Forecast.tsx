import { useWeatherState } from '@/hooks/useStoreState'
import { IForecastData } from '@/types/forecast.interface'
import { useNavigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

import './forecast.scss'

export function Forecast({
	forecast,
	isForecastLoading,
}: {
	forecast: IForecastData
	isForecastLoading: boolean
}) {
	const navigate = useNavigate()
	const currentHour = new Date().getHours()
	const { isDay, forecastType } = useWeatherState()

	return (
		<div className='weather-scroll-container'>
			{isForecastLoading ? (
				<div className='flex h-full items-center justify-center'>
					<CircularProgress />
				</div>
			) : (
				<>
					{forecastType === 'Hourly' ? (
						forecast &&
						forecast.forecast.forecastday[0].hour.map((hour, index) => (
							<div
								key={index}
								className={`weather-card ${isDay ? 'day' : 'night'} ${
									parseInt(hour.time.split(' ')[1]) === currentHour
										? `${isDay ? 'now-hour-day' : 'now-hour-night'}`
										: ''
								}`}
							>
								<p className='time'>
									{parseInt(hour.time.split(' ')[1]) === currentHour
										? 'Now'
										: new Date(hour.time).toLocaleTimeString().slice(0, 5)}
								</p>
								<img
									src={
										hour.condition.icon.includes('night')
											? '/night.png'
											: hour.condition.icon
									}
									alt='weather'
									className={`${hour.is_day ? 'h-full' : ''}`}
								/>
								<p className='temperature'>{hour.temp_c.toFixed(0)}°</p>
							</div>
						))
					) : (
						<>
							{forecast.forecast.forecastday.map((day, index) => (
								<div
									key={forecast.forecast.forecastday[index].date}
									className={`weather-card ${isDay ? 'day' : 'night'}`}
									onClick={() =>
										navigate(
											`/day/${forecast.forecast.forecastday[index].date}`
										)
									}
								>
									<p className='time'>
										{new Date(day.date).toLocaleDateString().slice(0, 5)}
									</p>
									<img src={day.day.condition.icon} alt='weather' />
									<p className='temperature'>{day.day.maxtemp_c.toFixed(0)}°</p>
								</div>
							))}
						</>
					)}
				</>
			)}
		</div>
	)
}
