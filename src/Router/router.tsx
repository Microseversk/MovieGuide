import { Navigate, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
	{
		path: '/',
		element: <>Main page</>,
	},
	{
		path: '/movie/:id',
		element: <>Movie details page</>,
	},
	{
		path: '*',
		element: <Navigate to={'/'} replace />,
	},
])
export default router
