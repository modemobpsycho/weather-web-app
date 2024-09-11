import { IForecastData } from '@/types/forecast.interface'
import { useWeatherState } from '@/hooks/useStoreState'

import './forecast.scss'

export function Forecast({ forecast }: { forecast: IForecastData }) {
	const currentHour = new Date().getHours()
	const { isDay, forecastType } = useWeatherState()

	return (
		<div className='weather-scroll-container'>
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
									? '../../assets/night.png'
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
							key={index}
							className={`weather-card ${isDay ? 'day' : 'night'}`}
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
		</div>
	)
}
