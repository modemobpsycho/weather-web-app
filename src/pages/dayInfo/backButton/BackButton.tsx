import { useWeatherState } from '@/hooks/useStoreState'
import { useNavigate } from 'react-router-dom'

export function BackButton() {
	const navigate = useNavigate()
	const { isDay } = useWeatherState()
	return (
		<button
			className={`fixed top-4 right-4 text-white font-medium rounded-lg px-2 py-1.5 dark:bg-gradient-to-r hover:bg-gradient-to-br ${
				isDay
					? ' from-[#517ef1] to-[#d185f1]'
					: 'from-[#5936B4] via-[#5936B4] to-[#362A84]'
			}`}
			onClick={() => navigate('/')}
		>
			Back
		</button>
	)
}