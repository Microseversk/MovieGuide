import formatDate from '@src/helpers/dateHelper'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from 'mdb-react-ui-kit'

interface MovieCardProps {
	posterPath: string
	voteAverage: number
	title: string
	releaseDate: string
}
const MovieCard = ({ posterPath, voteAverage, title, releaseDate }: MovieCardProps) => {
	return (
		<MDBCard className='border h-100'>
			<MDBCardImage
				src={`https://image.tmdb.org/t/p/original${posterPath}`}
				alt={`Постер ${title}`}
				height={'80%'}
				position='top'
			/>
			<MDBCardBody className='p-0 pe-1 ps-2 d-md-flex justify-content-start align-items-center'>
				<MDBCardText className='fw-bold fs-1 m-0'>{voteAverage.toFixed(1)}</MDBCardText>
				<div className='ms-md-3 w-100 pt-2'>
					<MDBCardText className='fs-5'>{title}</MDBCardText>
					<MDBCardText className='text-muted'>{formatDate(releaseDate)}</MDBCardText>
				</div>
			</MDBCardBody>
		</MDBCard>
	)
}

export default MovieCard
