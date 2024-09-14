import { HomeHeader } from '@/components/homeHeader/HomeHeader'
import { Forecast } from '@/components/forecast/Forecast'
import { SearchLocation } from '@/components/searchLocation/SearchLocation'
import { ForecastButtons } from '@/components/forecastButtons/ForecastButtons'
import { Footer } from '@/components/footer/Footer'
import { useWeatherState } from '@/hooks/useStoreState'
import { useActions } from '@/hooks/useActions'
import { useGetForecastQuery } from '@/stores/api/weather.api'
import { useEffect } from 'react'
import { CircularProgress } from '@mui/material'

import './home.scss'

function Home() {
	const { isDay, city, forecastType } = useWeatherState()
	const { setIsDay } = useActions()

	const { data: forecast, isLoading: isForecastLoading } = useGetForecastQuery(
		{
			city: city || 'Minsk',
			days: forecastType === 'Hourly' ? 1 : 7,
		},
		{ skip: !city }
	)

	useEffect(() => {
		if (forecast) {
			setIsDay(forecast.current.is_day)
		}
	}, [isForecastLoading, forecast])

	if (!forecast) {
		return <div>Loading...</div>
	}

	return (
		<div className={`home flex flex-col h-screen ${isDay ? 'day' : 'night'}`}>
			{isForecastLoading && (
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<CircularProgress color='inherit' size={100} sx={{ zIndex: 20 }} />
				</div>
			)}
			<SearchLocation />
			<HomeHeader forecast={forecast} />
			{!isDay && (
				<img
					src='/House.png'
					alt='weather'
					className='fixed w-full object-fit z-10 top-1/2 -translate-y-[calc(50vw-130px)] left-1/2 -translate-x-1/2 sm:w-1/2 sm:-translate-y-[calc(15vh)]'
				/>
			)}
			<div className='flex flex-col p-4 w-full rounded-2xl z-20 bg-transparent'>
				<ForecastButtons />
				<Forecast forecast={forecast} isForecastLoading={isForecastLoading} />
				<Footer />
			</div>
		</div>
	)
}

export default Home
