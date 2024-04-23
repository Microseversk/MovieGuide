import getMovieDetailsById from '@src/services/MovieService/get/getMovieDetailsById'
import { useEffect } from 'react'

const MovieInfoPage = () => {
	useEffect(() => {
		const fetchMovie = async () => {
			const { data } = await getMovieDetailsById(823464)
			console.log(data)
		}
		fetchMovie()
	}, [])

	return <>Movie info page</>
}

export default MovieInfoPage
