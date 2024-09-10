import { IForecastData } from '@/types/forecast.interface'

import './forecast.scss'

export function Forecast({ forecast }: { forecast: IForecastData }) {
	const currentHour = new Date().getHours()

	return (
		<div className='weather-scroll-container'>
			{forecast &&
				forecast.forecast.forecastday[0].hour.map((hour, index) => (
					<div
						key={index}
						className={`weather-card ${
							parseInt(hour.time.split(' ')[1]) === currentHour
								? 'now-hour'
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
				))}
		</div>
	)
}
