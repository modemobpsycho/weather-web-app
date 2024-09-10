import { useActions } from '@/hooks/useActions'
import { useWeatherState } from '@/hooks/useStoreState'

export function ForecastButtons() {
	const { forecastType } = useWeatherState()
	const { setForecastType } = useActions()

	return (
		<div>
			<div className='flex flex-col w-full z-20 px-4'>
				<div className='flex gap-3'>
					<button
						className={`focus:outline-none relative transition duration-300 ease-in-out ${
							forecastType === 'Hourly'
								? 'text-[#ffffff] text-lg'
								: 'text-white'
						}`}
						onClick={() => setForecastType('Hourly')}
					>
						Hourly Forecast
					</button>
					<button
						className={`ml-auto focus:outline-none relative transition duration-300 ease-in-out ${
							forecastType === 'Daily' ? 'text-[#ffffff] text-lg' : 'text-white'
						}`}
						onClick={() => setForecastType('Daily')}
					>
						Daily Forecast
					</button>
				</div>
			</div>
			<hr className='w-full mt-2 dark:border-gray-700 opacity-50'></hr>
		</div>
	)
}
