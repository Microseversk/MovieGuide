import $api from '@src/api/api'
import { Movie } from '@src/types/Movie'

interface getMoviePopularParams {
	page: number
	language: string
}

const getMoviePopular = async (params?: getMoviePopularParams) => {
	return $api.get<Movie[]>('/movie/popular', {
		params: params,
	})
}

export default getMoviePopular
