import MovieInfoPage from '@src/pages/MovieInfo/MovieInfoPage'
import MoviesFeedPage from '@src/pages/MoviesFeed/MoviesFeedPage'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/movies/:page',
		element: <MoviesFeedPage />,
	},
	{
		path: '/movie/:id',
		element: <MovieInfoPage />,
	},
	{
		path: '*',
		element: <Navigate to={'/movies/1'} replace />,
	},
])
export default router
