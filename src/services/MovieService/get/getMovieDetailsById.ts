import $api from '@src/api/api'
import { MovieDetails } from '@src/types/Movie'

const getMovieDetailsById = async (id: number) => {
	return $api.get<MovieDetails>('/movie/' + id, {
		params: {
			language: 'ru-RU',
		},
	})
}

export default getMovieDetailsById
