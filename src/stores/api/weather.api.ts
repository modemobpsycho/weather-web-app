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
		getDayInfo: builder.query({
			query: ({ city, dt }: { city: string; dt: string }) => ({
				url: '/forecast.json',
				method: 'GET',
				params: {
					q: city,
					days: 1,
					dt: dt,
				},
			}),
		}),
		searchCity: builder.query({
			query: (city: string) => ({
				url: '/search.json',
				method: 'GET',
				params: {
					q: city,
				},
			}),
		}),
	}),
})

export const {
	useGetCurrentWeatherQuery,
	useGetForecastQuery,
	useSearchCityQuery,
	useGetDayInfoQuery,
} = weatherApi
