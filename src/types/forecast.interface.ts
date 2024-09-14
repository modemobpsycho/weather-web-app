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
				condition: {
					icon: string
					text: string
				}
			}
			date: string
		}[]
	}
}

export interface IForecastData {
	forecast: {
		forecastday: {
			date: string
			day: {
				maxtemp_c: number
				mintemp_c: number
				condition: {
					icon: string
					text: string
				}
				avgtemp_c: number
				maxwind_mph: number
				avghumidity: number
				daily_chance_of_rain: number
				daily_chance_of_snow: number
				uv: number
			}
			hour: HourData[]
		}[]
	}
	location: {
		name: string
	}
	current: {
		temp_c: number
		condition: {
			text: string
		}
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
