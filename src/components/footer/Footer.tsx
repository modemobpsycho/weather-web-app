import { CurrentLocation } from './CurrentLocation'
import { Favorites } from './Favorites'

export function Footer() {
	return (
		<div className='w-full flex justify-between my-3 '>
			<CurrentLocation />
			<Favorites />
		</div>
	)
}
