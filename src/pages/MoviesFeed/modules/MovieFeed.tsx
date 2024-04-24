import MovieCard from '@src/components/MovieCard'
import getMoviePopular from '@src/services/MovieService/get/getMoviePopular'
import { useQuery } from '@tanstack/react-query'
import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import { useNavigate, useParams } from 'react-router-dom'

const MovieFeed = () => {
	const nav = useNavigate()
	const { page } = useParams()
	const { data, isLoading } = useQuery({
		queryKey: ['popularMoviesFeed', page],
		queryFn: () => getMoviePopular({ page: page ? Number(page) : 1 }),
	})

	if (isLoading) return <div>Loading...</div>
	return (
		<MDBRow>
			{data?.data.results.map(movie => (
				<MDBCol md={6} lg={3} key={movie.id} className='mt-3'>
					<MovieCard
						key={movie.id}
						posterPath={movie.poster_path}
						voteAverage={movie.vote_average}
						title={movie.title}
						releaseDate={movie.release_date}
						onClick={() => nav(`/movie/${movie.id}`)}
					/>
				</MDBCol>
			))}
		</MDBRow>
	)
}

export default MovieFeed
