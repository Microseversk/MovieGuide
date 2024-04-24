import getMovieDetailsById from '@src/services/MovieService/get/getMovieDetailsById'
import { useQuery } from '@tanstack/react-query'

const useMovieInfo = (id: number) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['movieInfo', Number(id)],
		queryFn: () => getMovieDetailsById(Number(id)),
		select: data => data.data,
	})
	return { data, isLoading, error }
}

export default useMovieInfo
