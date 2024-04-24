import MovieCard from '@src/components/MovieCard'
import { Movie } from '@src/types/Movie'
import { MDBCol, MDBRow } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'

interface SimilarFilmsProps {
	movies: Movie[]
	className?: string
}

const SimilarFilms = ({ movies, className }: SimilarFilmsProps) => {
	const nav = useNavigate()
	if (!movies.length) return null

	return (
		<MDBRow className={className}>
			{movies.slice(0, 6).map(movie => (
				<MDBCol key={movie.id} onClick={() => nav(`/movie/${movie.id}`)} sm={4} md={2} className='mt-3'>
					<MovieCard key={movie.id} posterPath={movie.poster_path} title={movie.title} />
				</MDBCol>
			))}
		</MDBRow>
	)
}

export default SimilarFilms
