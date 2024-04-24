import formatDate from '@src/helpers/dateHelper'
import { Genre } from '@src/types/Genre'
import { MDBCol, MDBRow, MDBTypography } from 'mdb-react-ui-kit'
import { LazyLoadImage } from 'react-lazy-load-image-component'

interface MovieInfoProps {
	title: string
	overview: string
	genres: Genre[]
	vote_average: number
	release_date: string
	runtime: number
	poster_path: string
	popularity: number
}

const MovieInfo = ({
	title,
	overview,
	genres,
	vote_average,
	popularity,
	release_date,
	runtime,
	poster_path,
}: MovieInfoProps) => {
	return (
		<>
			<MDBTypography tag='h1'>
				{vote_average.toFixed(2)} {title}
			</MDBTypography>
			<MDBRow>
				<MDBCol md={8} sm={12}>
					<MDBTypography>{overview}</MDBTypography>
					<MDBTypography>
						<span className='fw-bold'>Длительность: </span>
						{runtime} мин
					</MDBTypography>
					<MDBTypography>
						<span className='fw-bold'>Популярность: </span>
						{popularity.toFixed(2)}
					</MDBTypography>
					<MDBTypography>
						<span className='fw-bold'>Дата выхода: </span>
						{formatDate(release_date)}
					</MDBTypography>
					<MDBTypography>
						<span className='fw-bold'>Жанр: </span>
						{genres.map(genre => genre.name).join(', ')}
					</MDBTypography>
				</MDBCol>
				<MDBCol md={4} sm={12}>
					<LazyLoadImage
						effect='blur'
						className='w-100 rounded-3 border shadow '
						src={`https://image.tmdb.org/t/p/original${poster_path}`}
					/>
				</MDBCol>
			</MDBRow>
		</>
	)
}

export default MovieInfo
