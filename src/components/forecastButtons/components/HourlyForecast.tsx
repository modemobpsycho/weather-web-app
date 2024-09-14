export function HourlyForecast({
	forecastType,
	setForecastType,
}: {
	forecastType: string
	setForecastType: (forecastType: string) => void
}) {
	return (
		<button
			className={`relative transition-all duration-150 ease-in-out ${
				forecastType === 'Hourly' ? 'scale-125' : ''
			}`}
			onClick={() => setForecastType('Hourly')}
		>
			Hourly Forecast
		</button>
	)
}
