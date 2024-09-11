import { useWeatherState } from '@/hooks/useStoreState'
import { useState } from 'react'
import { Modal } from '../modal/Modal'
import { useActions } from '@/hooks/useActions'

export function Favorites() {
	const { isDay, favoriteCities } = useWeatherState()
	const { setCity } = useActions()
	const [showModal, setShowModal] = useState<boolean>(false)

	const handleCityClick = (city: string) => {
		setCity(city)
		setShowModal(false)
	}

	return (
		<>
			<button
				type='button'
				className={`text-white font-medium rounded-lg flex items-center justify-center w-[50%] text-lg px-4 py-2.5 mb-2 dark:bg-gradient-to-r  hover:bg-gradient-to-br ${
					isDay
						? 'from-[#517ef1] to-[#d185f1]'
						: 'from-[#5936B4] via-[#5936B4] to-[#362A84]'
				}`}
				onClick={() => setShowModal(true)}
			>
				<span className='ml-2'>Favorites</span>
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					{favoriteCities.map(city => (
						<p
							key={city}
							onClick={() => handleCityClick(city)}
							className='text-2xl'
						>
							{city}
						</p>
					))}
				</Modal>
			)}
		</>
	)
}
