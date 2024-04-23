import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit'

interface MovieCardProps {
	posterPath: string
	voteAverage: number
	title: string
	releaseDate: string
}
const MovieCard = ({ posterPath, voteAverage, title, releaseDate }: MovieCardProps) => {
	return (
		<MDBCard>
			<MDBCardImage src={`https://image.tmdb.org/t/p/original${posterPath}`} alt={`Постер ${title}`} position='top' />
			<MDBCardBody>
				<MDBCardTitle>{title}</MDBCardTitle>
				<MDBCardText>{releaseDate}</MDBCardText>
				<MDBCardText>{voteAverage}</MDBCardText>
			</MDBCardBody>
		</MDBCard>
	)
}

export default MovieCard
