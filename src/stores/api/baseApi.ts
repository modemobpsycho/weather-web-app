import { MyConfig } from '@/config/config'
import { urls } from '@/helpers/urls'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
	reducerPath: 'baseApi',
	baseQuery: fetchBaseQuery({
		baseUrl: urls.weatherApi,
		paramsSerializer: params => {
			const searchParams = new URLSearchParams(params)
			searchParams.append('key', MyConfig.API_KEY as string)
			return searchParams.toString()
		},
	}),

	tagTypes: [],
	endpoints: () => ({}),
})
