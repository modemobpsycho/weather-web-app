import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { reducer as weatherReducer } from './slices/weather.slice'

const reducers = combineReducers({
	weather: weatherReducer,
	[baseApi.reducerPath]: baseApi.reducer,
})

export const store = configureStore({
	reducer: reducers,
	devTools: process.env.NODE_ENV === 'development',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
