import { useWeatherState } from '@/hooks/useStoreState'
import { useNavigate } from 'react-router-dom'

export function BackButton() {
	const navigate = useNavigate()
	const { isDay } = useWeatherState()
	return (
		<button
			className={`fixed top-4 left-4 text-white font-medium w-[90px] text-lg rounded-lg px-1.5 py-2.5 z-40 dark:bg-gradient-to-r hover:bg-gradient-to-br ${
				isDay
					? ' from-[#517ef1] to-[#48bcff]'
					: 'from-[#5936B4] via-[#5936B4] to-[#362A84]'
			}`}
			onClick={() => navigate('/')}
		>
			Back
		</button>
	)
}
