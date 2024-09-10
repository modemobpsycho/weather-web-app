export interface IForecastHeader {
	location: {
		name: string
	}
	current: {
		temp_c: number
		condition: {
			text: string
		}
	}
	forecast: {
		forecastday: {
			day: {
				maxtemp_c: number
				mintemp_c: number
			}
		}[]
	}
}

export interface IForecastData {
	forecast: {
		forecastday: {
			hour: HourData[]
		}[]
	}
}

interface HourData {
	time: string
	condition: {
		icon: string
	}
	temp_c: number
	is_day: number
}
