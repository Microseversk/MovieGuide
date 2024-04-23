import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit'
import MovieFeed from './modules/MovieFeed'
import Pagination from './modules/Pagination'

const MovieInfoPage = () => {
	return (
		<MDBContainer>
			<MDBTypography tag='h1'>Популярные фильмы</MDBTypography>
			<MovieFeed />
			<Pagination />
		</MDBContainer>
	)
}

export default MovieInfoPage
