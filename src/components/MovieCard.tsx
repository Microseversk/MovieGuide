import formatDate from '@src/helpers/dateHelper'
import { MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

interface MovieCardProps {
	posterPath: string
	voteAverage: number
	title: string
	releaseDate: string
	onClick?: () => void
}
const MovieCard = ({ posterPath, voteAverage, title, releaseDate, onClick }: MovieCardProps) => {
	return (
		<MDBCard onClick={onClick} className='border h-100'>
			<LazyLoadImage
				className='card-img-top'
				alt='...'
				src={`https://image.tmdb.org/t/p/original${posterPath}`}
				effect='blur'
				height={'100%'}
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
