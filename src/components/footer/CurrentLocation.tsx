import { useActions } from '@/hooks/useActions'

export function CurrentLocation() {
	const { setCity } = useActions()

	const handleLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position => {
				const { latitude, longitude } = position.coords

				fetch(
					`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
				)
					.then(response => response.json())
					.then(data => {
						setCity(data.locality)
					})
			})
		}
	}

	return (
		<button
			type='button'
			className='text-white font-medium flex items-center justify-center w-[50%] text-lg rounded-lg px-4 py-2.5 me-2 mb-2 dark:bg-gradient-to-r from-[#5936B4] via-[#5936B4] to-[#362A84] hover:bg-gradient-to-br'
			onClick={handleLocation}
		>
			<svg
				width='22'
				height='25'
				viewBox='0 0 22 25'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M6.96094 4.49902C6.96094 6.38965 8.23926 7.96875 9.99023 8.40918V15.209C9.99023 18.3779 10.5596 20.1074 10.9893 20.1074C11.4297 20.1074 11.9883 18.3887 11.9883 15.209V8.40918C13.7393 7.97949 15.0283 6.38965 15.0283 4.49902C15.0283 2.27539 13.2344 0.449219 10.9893 0.449219C8.75488 0.449219 6.96094 2.27539 6.96094 4.49902ZM9.83984 4.72461C9.10938 4.72461 8.46484 4.08008 8.46484 3.32812C8.46484 2.58691 9.10938 1.95312 9.83984 1.95312C10.6025 1.95312 11.2256 2.58691 11.2256 3.32812C11.2256 4.08008 10.6025 4.72461 9.83984 4.72461ZM11 24.0391C17.4775 24.0391 21.1943 21.8047 21.1943 19.4414C21.1943 16.6055 16.6934 14.876 13.7393 14.8438V16.4121C15.8125 16.4443 19.0244 17.5723 19.0244 19.1836C19.0244 21.0312 15.6191 22.3418 11 22.3418C6.35938 22.3418 2.97559 21.0527 2.97559 19.1836C2.97559 17.5723 6.17676 16.4443 8.25 16.4121V14.8438C5.2959 14.876 0.794922 16.6055 0.794922 19.4414C0.794922 21.8047 4.52246 24.0391 11 24.0391Z'
					fill='white'
				/>
			</svg>
			<span className='ml-2'>Where am I?</span>
		</button>
	)
}
