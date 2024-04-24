import $api from '@src/api/api'
import { MoviesResponse } from './getMoviePopular'

interface getSimilarMoviesByIdParams {
	page: number
}

const getSimilarMoviesById = async (id: number, params?: getSimilarMoviesByIdParams) => {
	return $api.get<MoviesResponse>(`/movie/${id}/similar`, {
		params: {
			...params,
			language: 'ru-RU',
		},
	})
}

export default getSimilarMoviesById
