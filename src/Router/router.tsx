import MovieInfoPage from '@src/pages/MovieInfo/MovieInfoPage'
import MoviesFeedPage from '@src/pages/MoviesFeed/MoviesFeedPage'
import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MoviesFeedPage />,
	},
	{
		path: '/movie/:id',
		element: <MovieInfoPage />,
	},
	{
		path: '*',
		element: <Navigate to={'/'} replace />,
	},
])
export default router
