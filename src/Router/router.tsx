import Layout from '@src/components/Layout'
import MovieInfoPage from '@src/pages/MovieInfo/MovieInfoPage'
import MoviesFeedPage from '@src/pages/MoviesFeed/MoviesFeedPage'
import { Navigate, Route, Routes } from 'react-router-dom'

const Router = () => {
	return (
		<Routes>
			<Route path='/movies/:page' element={<Layout children={<MoviesFeedPage />} />} />
			<Route path='/movie/:id' element={<Layout children={<MovieInfoPage />} />} />
			<Route path='*' element={<Navigate to={'/movies/1'} replace />} />
		</Routes>
	)
}

export default Router
