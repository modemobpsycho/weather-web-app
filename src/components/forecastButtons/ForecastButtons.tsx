import { HourlyForecast } from './components/HourlyForecast'
import { DailyForecast } from './components/DailyForecast'
import { useActions } from '@/hooks/useActions'
import { useWeatherState } from '@/hooks/useStoreState'

export function ForecastButtons() {
	const { forecastType } = useWeatherState()
	const { setForecastType } = useActions()

	return (
		<div>
			<div className='flex flex-col w-full z-20 px-4'>
				<div className='flex gap-3'>
					<HourlyForecast
						forecastType={forecastType}
						setForecastType={setForecastType}
					/>
					<DailyForecast
						setForecastType={setForecastType}
						forecastType={forecastType}
					/>
				</div>
			</div>
			<hr className='w-full mt-2 dark:border-gray-700 opacity-50'></hr>
		</div>
	)
}
