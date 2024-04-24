import getMovieDetailsById from '@src/services/MovieService/get/getMovieDetailsById'
import getSimilarMoviesById from '@src/services/MovieService/get/getSimilarMoviesById'
import { useQuery } from '@tanstack/react-query'
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit'
import { useParams } from 'react-router-dom'
import MovieInfo from './modules/MovieInfo'
import SimilarFilms from './modules/SimilarFilms'

const MovieInfoPage = () => {
	const { id } = useParams()
	const { data: movieInfo, isLoading } = useQuery({
		queryKey: ['movieInfo', Number(id)],
		queryFn: () => getMovieDetailsById(Number(id)),
		select: data => data.data,
	})
	const { data: similarMovies, isLoading: isLoadingSimilar } = useQuery({
		queryKey: ['similarFilms', id],
		queryFn: () => getSimilarMoviesById(Number(id)),
		select: data => data.data.results,
	})

	if (isLoading || isLoadingSimilar) return <>Loading...</>

	if (!movieInfo) return <>Movie not found</>

	return (
		<MDBContainer>
			<MovieInfo
				title={movieInfo.title}
				overview={movieInfo.overview}
				genres={movieInfo.genres}
				vote_average={movieInfo.vote_average}
				release_date={movieInfo.release_date}
				runtime={movieInfo.runtime}
				popularity={movieInfo.popularity}
				poster_path={movieInfo.poster_path}
			/>
			<MDBTypography className='fw-bold mt-5 mb-0'>Похожие фильмы:</MDBTypography>
			<SimilarFilms movies={similarMovies || []} />
		</MDBContainer>
	)
}

export default MovieInfoPage
