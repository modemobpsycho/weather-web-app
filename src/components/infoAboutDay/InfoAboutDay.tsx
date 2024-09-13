import { IForecastData } from '@/types/forecast.interface'
import { useWeatherState } from '@/hooks/useStoreState'

import '../forecast/forecast.scss'

export function InfoAboutDay({ forecast }: { forecast: IForecastData }) {
	const { isDay } = useWeatherState()
	return (
		<>
			<div
				className={`flex flex-col items-center py-4 w-full z-20 ${
					isDay ? 'day-header' : 'night-header'
				}`}
			>
				<div className='flex flex-col items-center container-blur gap-2'>
					<p className='text-4xl font-light'>{forecast.location.name}</p>

					<p className='text-7xl font-extralight'>
						{new Date(forecast.forecast.forecastday[0].date)
							.toLocaleDateString()
							.slice(0, 5)}
					</p>
					<div className='flex flex-col items-center'>
						<img
							src={forecast.forecast.forecastday[0].day.condition.icon}
							alt='weather'
							className='w-10 mb-2'
						/>
						<p className={`${isDay ? 'day' : 'night'}`}>
							{forecast.forecast.forecastday[0].day.condition.text}
						</p>
					</div>
				</div>
			</div>
			<div className='weather-scroll-container'>
				{forecast &&
					forecast.forecast.forecastday[0].hour.map((hour, index) => (
						<div
							key={index}
							className={`weather-card ${isDay ? 'day' : 'night'}`}
						>
							<p className='time'>
								{new Date(hour.time).toLocaleTimeString().slice(0, 5)}
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
					))}
			</div>
		</>
	)
}
