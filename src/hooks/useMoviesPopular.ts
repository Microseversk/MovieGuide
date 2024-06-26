import getMoviePopular from '@src/services/MovieService/get/getMoviePopular'
import { useQuery } from '@tanstack/react-query'

const useMoviesPopular = (page: number) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['popularMoviesFeed', page],
		queryFn: () => getMoviePopular({ page: page ? page : 1 }),
	})
	return { data, isLoading, error }
}

export default useMoviesPopular
