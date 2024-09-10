import { useActions } from '@/hooks/useActions'
import { useWeatherState } from '@/hooks/useStoreState'
import { useState } from 'react'

export function SearchLocation() {
	const { city } = useWeatherState()
	const { setCity } = useActions()
	const [submittedCity, setSubmittedCity] = useState(city)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSubmittedCity(e.target.value)
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setCity(submittedCity)
	}
	return (
		<div className='flex flex-col items-center z-20 mt-auto'>
			<form className='mx-auto w-full mt-auto' onSubmit={handleSubmit}>
				<label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
					Search
				</label>
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
						className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='City'
						required
						onChange={handleChange}
					/>
					<button
						type='submit'
						className='text-white absolute end-2.5 bottom-2.5 rounded-lg font-medium text-sm px-4 py-2 dark:bg-gradient-to-r from-[#5936B4] via-[#5936B4] to-[#362A84] hover:bg-gradient-to-br'
					>
						Search
					</button>
				</div>
			</form>
		</div>
	)
}
