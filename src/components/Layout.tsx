import { MDBContainer } from 'mdb-react-ui-kit'
import NavBar from './Navbar'

const Layout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<NavBar />
			<MDBContainer className='mt-3'>{children}</MDBContainer>
		</>
	)
}

export default Layout
