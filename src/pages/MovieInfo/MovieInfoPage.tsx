import Loader from '@src/components/Loader'
import useMovieInfo from '@src/hooks/useMovieInfo'
import useSimilarMovies from '@src/hooks/useSimilarMovies'
import { MDBTypography } from 'mdb-react-ui-kit'
import { useParams } from 'react-router-dom'
import MovieInfo from './modules/MovieInfo'
import SimilarFilms from './modules/SimilarFilms'

const MovieInfoPage = () => {
	const { id } = useParams()
	const { data: movieInfo, isLoading } = useMovieInfo(Number(id))
	const { data: similarMovies, isLoading: isLoadingSimilar } = useSimilarMovies(Number(id))

	if (isLoading || isLoadingSimilar) return <Loader />

	if (!movieInfo) return <>Movie not found</>

	return (
		<>
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
		</>
	)
}

export default MovieInfoPage
