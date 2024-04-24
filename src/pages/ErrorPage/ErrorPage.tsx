import { MDBTypography } from 'mdb-react-ui-kit'

const ErrorPage = () => {
	return (
		<MDBTypography tag={'h1'} className='text-center text-danger '>
			Соединение оборвано. Включите VPN!
		</MDBTypography>
	)
}

export default ErrorPage
