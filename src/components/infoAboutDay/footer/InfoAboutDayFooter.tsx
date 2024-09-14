import { useWeatherState } from '@/hooks/useStoreState'
import { IForecastData } from '@/types/forecast.interface'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import AirIcon from '@mui/icons-material/Air'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import GrainIcon from '@mui/icons-material/Grain'
import WaterDropIcon from '@mui/icons-material/WaterDrop'
import FlareIcon from '@mui/icons-material/Flare'

export function InfoAboutDayFooter({ dayInfo }: { dayInfo: IForecastData }) {
	const { isDay } = useWeatherState()
	return (
		<div className='bg-transparent rounded-2xl z-20 mx-2 p-3 overflow-auto'>
			<div className='grid grid-cols-2 mb-2 gap-2'>
				<div className={`info-card ${isDay ? 'day' : 'night'}`}>
					<DeviceThermostatIcon sx={{ fontSize: 28 }} />
					<p className='option'>High temp</p>
					<p className='characteristic'>
						{dayInfo.forecast.forecastday[0].day.maxtemp_c.toFixed(0)}°
					</p>
				</div>
				<div className={`info-card ${isDay ? 'day' : 'night'}`}>
					<DeviceThermostatIcon sx={{ fontSize: 28 }} />
					<p className='option'>Low temp</p>
					<p className='characteristic'>
						{dayInfo.forecast.forecastday[0].day.mintemp_c.toFixed(0)}°
					</p>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				<div className={`info-card ${isDay ? 'day' : 'night'}`}>
					<DeviceThermostatIcon sx={{ fontSize: 28 }} />
					<p className='option'>Average Temperature</p>
					<p className='characteristic'>
						{dayInfo.forecast.forecastday[0].day.avgtemp_c.toFixed(0)}°
					</p>
				</div>
				<div className={`info-card ${isDay ? 'day' : 'night'}`}>
					<AirIcon sx={{ fontSize: 28 }} />
					<p className='option'>Maximum wind speed</p>
					<p className='characteristic'>
						{dayInfo.forecast.forecastday[0].day.maxwind_mph} mph
					</p>
				</div>
				<div className={`info-card ${isDay ? 'day' : 'night'}`}>
					<GrainIcon sx={{ fontSize: 28 }} />
					<p className='option'>Humidity</p>
					<p className='characteristic'>
						{dayInfo.forecast.forecastday[0].day.avghumidity}%
					</p>
				</div>

				<div className={`info-card ${isDay ? 'day' : 'night'}`}>
					<WaterDropIcon sx={{ fontSize: 28 }} />
					<p className='option'>Chance of rain</p>
					<p className='characteristic'>
						{dayInfo.forecast.forecastday[0].day.daily_chance_of_rain}%
					</p>
				</div>
				<div className={`info-card ${isDay ? 'day' : 'night'}`}>
					<AcUnitIcon sx={{ fontSize: 28 }} />
					<p className='option'>Chance of snow</p>
					<p className='characteristic'>
						{dayInfo.forecast.forecastday[0].day.daily_chance_of_snow}%
					</p>
				</div>

				<div className={`info-card ${isDay ? 'day' : 'night'}`}>
					<FlareIcon sx={{ fontSize: 28 }} />
					<p className='option'>UV index</p>
					<p className='characteristic'>
						{dayInfo.forecast.forecastday[0].day.uv} UV
					</p>
				</div>
			</div>
		</div>
	)
}
