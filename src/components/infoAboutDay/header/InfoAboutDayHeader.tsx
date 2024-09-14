import { useWeatherState } from '@/hooks/useStoreState'
import { getDayOfWeek } from '@/helpers/helpers'
import { IForecastData } from '@/types/forecast.interface'

export function InfoAboutDayHeader({ dayInfo }: { dayInfo: IForecastData }) {
	const { isDay } = useWeatherState()
	return (
		<div className='flex flex-col w-full mt-10'>
			<div
				className={`flex flex-col items-center py-4 w-full z-20 ${
					isDay ? 'day-header' : 'night-header'
				}`}
			>
				<div className='flex flex-col items-center container-blur gap-2'>
					<p className='text-4xl font-light'>{dayInfo.location.name}</p>

					<p className='text-7xl font-extralight'>
						{new Date(dayInfo.forecast.forecastday[0].date)
							.toLocaleDateString()
							.slice(0, 5)}
					</p>
					<p className='text-xl'>
						{getDayOfWeek(dayInfo.forecast.forecastday[0].date)}
					</p>
					<p className={`${isDay ? 'day' : 'night'} text-md`}>
						{dayInfo.forecast.forecastday[0].day.condition.text}
					</p>
					<div className='flex flex-col items-center'>
						<img
							src={dayInfo.forecast.forecastday[0].day.condition.icon}
							alt='weather'
							className='w-12'
						/>
					</div>
				</div>
			</div>
			<div className='weather-scroll-container mx-2'>
				{dayInfo &&
					dayInfo.forecast.forecastday[0].hour.map((hour, index) => (
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
		</div>
	)
}
