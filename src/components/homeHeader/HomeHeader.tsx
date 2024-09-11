import { IForecastHeader } from '@/types/forecast.interface'
import { useWeatherState } from '@/hooks/useStoreState'

import './homeHeader.scss'

export function HomeHeader({ forecast }: { forecast: IForecastHeader }) {
	const { isDay } = useWeatherState()
	return (
		<div
			className={`flex flex-col items-center py-4 mt-20 w-full h-full z-20 ${
				isDay ? 'day-header' : 'night-header'
			}`}
		>
			<div className='flex flex-col items-center container-blur gap-2'>
				<p className='text-4xl font-light'>{forecast.location.name}</p>

				<p className='text-7xl font-extralight'>
					{forecast.current.temp_c.toFixed(0)}°
				</p>
				<div className='flex flex-col items-center'>
					<p className={`${isDay ? 'day' : 'night'}`}>
						{forecast.current.condition.text}
					</p>

					<div className='flex items-center gap-2'>
						<p>
							H: {forecast.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}°
						</p>

						<p>
							L: {forecast.forecast.forecastday[0].day.mintemp_c.toFixed(0)}°
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
