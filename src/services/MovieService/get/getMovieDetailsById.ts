import $api from '@src/api/api'
import { Movie } from '@src/types/Movie'

const getMovieDetailsById = async (id: number) => {
	return $api.get<Movie>('/movie/' + id, {
		params: {
			language: 'ru-RU',
		},
	})
}

export default getMovieDetailsById
