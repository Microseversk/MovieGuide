import getSimilarMoviesById from '@src/services/MovieService/get/getSimilarMoviesById'
import { useQuery } from '@tanstack/react-query'

const useSimilarMovies = (id: number) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['similarFilms', id],
		queryFn: () => getSimilarMoviesById(Number(id)),
		select: data => data.data.results,
	})
	return {
		data,
		isLoading,
		error,
	}
}

export default useSimilarMovies
