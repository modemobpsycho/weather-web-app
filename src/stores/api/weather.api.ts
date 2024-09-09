import { baseApi } from './baseApi'

export const weatherApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getCurrentWeather: builder.query({
			query: (city: string) => ({
				url: '/current.json',
				method: 'GET',
				params: {
					q: city,
				},
			}),
		}),
		getForecast: builder.query({
			query: ({ city, days }) => ({
				url: '/forecast.json',
				method: 'GET',
				params: {
					q: city,
					days: days,
				},
			}),
		}),
	}),
})

export const { useGetCurrentWeatherQuery, useGetForecastQuery } = weatherApi
