import { AddFavoriteButton } from '../addFavoriteButton/AddFavoriteButton'
import { useActions } from '@/hooks/useActions'
import { useWeatherState } from '@/hooks/useStoreState'
import { useState } from 'react'

export function SearchLocation() {
	const { city, isDay } = useWeatherState()
	const { setCity } = useActions()
	const [submittedCity, setSubmittedCity] = useState(city)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSubmittedCity(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setCity(submittedCity)
		setSubmittedCity('')
	}
	return (
		<div className='flex items-center mt-4 mx-4 z-20'>
			<form className='mx-auto w-screen mt-auto' onSubmit={handleSubmit}>
				<div className='relative'>
					<div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
						<svg
							className='w-4 h-4 text-gray-500 dark:text-gray-400'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 20 20'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
							/>
						</svg>
					</div>
					<input
						type='search'
						id='default-search'
						className={`block w-full py-3 ps-12 text-[17px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
							isDay
								? ' bg-gray-100 border-[#48bcff]'
								: ' bg-gray-700 border-gray-600 '
						}`}
						placeholder='Search for a city'
						value={submittedCity}
						required
						onChange={handleChange}
					/>
					<button
						type='submit'
						className={`absolute end-3 bottom-2.5 rounded-lg font-medium text-[16px] px-3 py-1 dark:bg-gradient-to-r hover:bg-gradient-to-br ${
							isDay
								? ' from-[#517ef1] to-[#48bcff]'
								: 'from-[#5936B4] via-[#5936B4] to-[#362A84]'
						}`}
					>
						Search
					</button>
				</div>
			</form>
			<AddFavoriteButton currentCity={city} />
		</div>
	)
}
