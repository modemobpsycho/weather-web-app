export function Modal({
	children,
	onClose,
}: {
	children: React.ReactNode
	onClose: () => void
}) {
	return (
		<div className='absolute z-50 inset-0 flex items-center justify-center bg-black bg-opacity-80'>
			<div className='rounded-lg p-5 w-full h-full'>
				<p className='text-2xl font-bold mb-4 text-center'>Favorite Cities</p>
				<button
					className='absolute top-2 right-2 text-gray-100 hover:text-gray-800'
					onClick={onClose}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-7 w-7'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={4}
							d='M6 18L18 6M6 6l12 12'
						/>
					</svg>
				</button>
				<div className='flex flex-col items-center'>{children}</div>
			</div>
		</div>
	)
}
