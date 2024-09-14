import { useWeatherState } from '@/hooks/useStoreState'
import { useActions } from '@/hooks/useActions'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import StarIcon from '@mui/icons-material/Star'

interface AddFavoriteButtonProps {
	currentCity: string
}

export const AddFavoriteButton: React.FC<AddFavoriteButtonProps> = ({
	currentCity,
}) => {
	const { favoriteCities, isDay } = useWeatherState()
	const { addFavoriteCity, removeFavoriteCity } = useActions()
	const isFavorite = favoriteCities.includes(currentCity)

	const handleFavoriteToggle = () => {
		if (isFavorite) {
			removeFavoriteCity(currentCity)
		} else {
			addFavoriteCity(currentCity)
		}
	}

	return (
		<button
			type='button'
			className={`rounded-lg ml-4 px-2 py-2 z-30 dark:bg-gradient-to-r ${
				isDay
					? 'from-[#517ef1] to-[#48bcff]'
					: 'from-[#5936B4] via-[#5936B4] to-[#362A84]'
			}`}
			onClick={handleFavoriteToggle}
		>
			{isFavorite ? (
				<StarIcon fontSize='large' sx={{ color: 'yellow' }} />
			) : (
				<StarBorderIcon fontSize='large' />
			)}
		</button>
	)
}
