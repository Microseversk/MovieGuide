import getMovieDetailsById from '@src/services/MovieService/get/getMovieDetailsById'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

const MovieInfoPage = () => {
	const { id } = useParams()
	const { data, isLoading } = useQuery({
		queryKey: ['movieInfo', Number(id)],
		queryFn: () => getMovieDetailsById(Number(id)),
	})

	if (isLoading) return <>Loading...</>

	console.log(data?.data)

	return <>Movie info page</>
}

export default MovieInfoPage
