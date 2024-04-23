import $api from '@src/api/api'
import { Movie } from '@src/types/Movie'

interface getMoviePopularParams {
	page: number
}

export interface PopulavMoviesResponse {
	page: number
	results: Movie[]
	total_pages: number
	total_results: number
}

const getMoviePopular = async (params?: getMoviePopularParams) => {
	return $api.get<PopulavMoviesResponse>('/movie/popular', {
		params: {
			...params,
			language: 'ru-RU',
		},
	})
}

export default getMoviePopular
