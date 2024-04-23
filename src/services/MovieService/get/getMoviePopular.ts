import $api from '@src/api/api'
import { Movie } from '@src/types/Movie'

interface getMoviePopularParams {
	page: number
}

const getMoviePopular = async (params?: getMoviePopularParams) => {
	return $api.get<Movie[]>('/movie/popular', {
		params: {
			...params,
			language: 'ru-RU',
		},
	})
}

export default getMoviePopular
