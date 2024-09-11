import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface weatherState {
	isDay: boolean
	city: string
	forecastType: string
	favoriteCities: string[]
}

const initialState: weatherState = {
	isDay: true,
	city: 'Minsk',
	forecastType: 'Hourly',
	favoriteCities: JSON.parse(localStorage.getItem('favoriteCities') || '[]'),
}

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setCity: (state, action: PayloadAction<string>) => {
			state.city = action.payload
		},
		setIsDay: (state, action: PayloadAction<boolean>) => {
			state.isDay = action.payload
		},
		setForecastType: (state, action: PayloadAction<string>) => {
			state.forecastType = action.payload
		},
		addFavoriteCity: (state, action: PayloadAction<string>) => {
			state.favoriteCities.push(action.payload)
			localStorage.setItem(
				'favoriteCities',
				JSON.stringify(state.favoriteCities)
			)
		},
		removeFavoriteCity: (state, action: PayloadAction<string>) => {
			state.favoriteCities = state.favoriteCities.filter(
				city => city !== action.payload
			)
			localStorage.setItem(
				'favoriteCities',
				JSON.stringify(state.favoriteCities)
			)
		},

		reset: () => initialState,
	},
})

export const { actions, reducer } = weatherSlice
