import { useSelector } from 'react-redux'
import { RootState } from '@/stores/store'

export const useWeatherState = () => {
	return useSelector((state: RootState) => state.weather)
}
