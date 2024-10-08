import { Modal } from '@/components/modal/Modal'
import { useWeatherState } from '@/hooks/useStoreState'
import { useActions } from '@/hooks/useActions'
import { useState } from 'react'

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
				className={`font-medium rounded-lg flex items-center justify-center w-[50%] text-lg px-4 py-2.5 mb-2 dark:bg-gradient-to-r hover:bg-gradient-to-br ${
					isDay
						? 'from-[#517ef1] to-[#48bcff]'
						: 'from-[#5936B4] via-[#5936B4] to-[#362A84]'
				}`}
				onClick={() => setShowModal(true)}
			>
				<svg
					width='22'
					height='25'
					viewBox='0 0 22 18'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1.41797 4.52832L2.3418 3.85156L3.2334 4.52832C3.55566 4.76465 3.89941 4.51758 3.78125 4.16309L3.42676 3.06738L4.3291 2.39062C4.6084 2.17578 4.50098 1.77832 4.14648 1.77832H3.01855L2.64258 0.607422C2.5459 0.295898 2.12695 0.295898 2.03027 0.607422L1.6543 1.77832H0.515625C0.161133 1.77832 0.0429688 2.17578 0.333008 2.39062L1.24609 3.06738L0.891602 4.16309C0.762695 4.51758 1.10645 4.75391 1.41797 4.52832ZM7.43359 3.62598H20.958C21.4414 3.62598 21.8174 3.25 21.8174 2.7666C21.8174 2.27246 21.4414 1.89648 20.958 1.89648H7.43359C6.9502 1.89648 6.56348 2.27246 6.56348 2.7666C6.56348 3.25 6.9502 3.62598 7.43359 3.62598ZM1.41797 11.0059L2.3418 10.3291L3.2334 11.0059C3.55566 11.2529 3.89941 10.9951 3.78125 10.6406L3.42676 9.54492L4.3291 8.86816C4.6084 8.65332 4.50098 8.2666 4.14648 8.2666H3.01855L2.64258 7.08496C2.5459 6.78418 2.12695 6.78418 2.03027 7.08496L1.6543 8.2666H0.515625C0.161133 8.2666 0.0429688 8.65332 0.333008 8.86816L1.24609 9.54492L0.891602 10.6406C0.773438 10.9951 1.10645 11.2314 1.41797 11.0059ZM7.43359 10.125H20.958C21.4414 10.125 21.8174 9.73828 21.8174 9.25488C21.8174 8.77148 21.4414 8.39551 20.958 8.39551H7.43359C6.9502 8.39551 6.56348 8.77148 6.56348 9.25488C6.56348 9.73828 6.9502 10.125 7.43359 10.125ZM1.41797 17.5156L2.3418 16.8389L3.2334 17.5156C3.55566 17.7627 3.89941 17.5049 3.78125 17.1504L3.42676 16.0547L4.3291 15.3779C4.6084 15.1631 4.50098 14.7764 4.14648 14.7764H3.01855L2.64258 13.5947C2.5459 13.2939 2.12695 13.2832 2.03027 13.5947L1.6543 14.7764H0.515625C0.161133 14.7764 0.0429688 15.1631 0.333008 15.3779L1.24609 16.0547L0.891602 17.1504C0.773438 17.5049 1.10645 17.7412 1.41797 17.5156ZM7.43359 16.6133H20.958C21.4414 16.6133 21.8174 16.2373 21.8174 15.7539C21.8174 15.2598 21.4414 14.8838 20.958 14.8838H7.43359C6.9502 14.8838 6.56348 15.2598 6.56348 15.7539C6.56348 16.2373 6.9502 16.6133 7.43359 16.6133Z'
						fill='white'
					/>
				</svg>
				<span className='ml-2'>Favorites</span>
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<div className='flex flex-col items-center'>
						{favoriteCities.map(city => (
							<p
								key={city}
								onClick={() => handleCityClick(city)}
								className='text-2xl'
							>
								{city}
							</p>
						))}
					</div>
				</Modal>
			)}
		</>
	)
}
