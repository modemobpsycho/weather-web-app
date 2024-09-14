import { CurrentLocation } from './components/CurrentLocation'
import { Favorites } from './components/Favorites'

export function Footer() {
	return (
		<div className='w-full flex mt-3'>
			<CurrentLocation />
			<Favorites />
		</div>
	)
}
