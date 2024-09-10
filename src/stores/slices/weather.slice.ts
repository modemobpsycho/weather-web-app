import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface weatherState {
	isDay: boolean
	city: string
	forecastType: string
}

const initialState: weatherState = {
	isDay: true,
	city: 'Minsk',
	forecastType: 'Hourly',
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
		reset: () => initialState,
	},
})

export const { actions, reducer } = weatherSlice
