import getMovieDetailsById from '@src/services/MovieService/get/getMovieDetailsById'
import { useQuery } from '@tanstack/react-query'
import { MDBContainer } from 'mdb-react-ui-kit'
import { useParams } from 'react-router-dom'
import MovieInfo from './modules/MovieInfo'
import SimilarFilms from './modules/SimilarFilms'

const MovieInfoPage = () => {
	const { id } = useParams()
	const { data: data, isLoading } = useQuery({
		queryKey: ['movieInfo', Number(id)],
		queryFn: () => getMovieDetailsById(Number(id)),
		select: data => data.data,
	})

	if (isLoading) return <>Loading...</>

	if (!data) return <>Movie not found</>

	console.log(data)

	return (
		<MDBContainer>
			<MovieInfo
				title={data.title}
				overview={data.overview}
				genres={data.genres}
				vote_average={data.vote_average}
				release_date={data.release_date}
				runtime={data.runtime}
				popularity={data.popularity}
				poster_path={data.poster_path}
			/>
			<SimilarFilms />
		</MDBContainer>
	)
}

export default MovieInfoPage
