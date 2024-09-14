export function DailyForecast({
	setForecastType,
	forecastType,
}: {
	setForecastType: (forecastType: string) => void
	forecastType: string
}) {
	return (
		<button
			className={`ml-auto relative transition-all duration-150 ease-in-out ${
				forecastType === 'Daily' ? 'scale-125' : ''
			}`}
			onClick={() => setForecastType('Daily')}
		>
			Daily Forecast
		</button>
	)
}
