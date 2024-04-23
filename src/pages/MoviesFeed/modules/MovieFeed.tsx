import MovieCard from '@src/components/MovieCard'
import getMoviePopular from '@src/services/MovieService/get/getMoviePopular'
import { useQuery } from '@tanstack/react-query'
import { MDBCol, MDBRow } from 'mdb-react-ui-kit'

const MovieFeed = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['popularMoviesFeed'],
		queryFn: () => getMoviePopular(),
	})

	if (isLoading) return <div>Loading...</div>

	return (
		<MDBRow className=''>
			{data?.data.results.map(movie => (
				<MDBCol md={6} lg={3} key={movie.id} className='mt-3'>
					<MovieCard
						key={movie.id}
						posterPath={movie.poster_path}
						voteAverage={movie.vote_average}
						title={movie.title}
						releaseDate={movie.release_date}
					/>
				</MDBCol>
			))}
		</MDBRow>
	)
}

export default MovieFeed
