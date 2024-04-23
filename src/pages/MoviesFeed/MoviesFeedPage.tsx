import getMoviePopular from '@src/services/MovieService/get/getMoviePopular'
import { useEffect } from 'react'

const MovieInfoPage = () => {
	useEffect(() => {
		const fetchMovies = async () => {
			const { data } = await getMoviePopular()
			console.log(data)
		}
		fetchMovies()
	}, [])
	return <>MoviesFeed</>
}

export default MovieInfoPage
