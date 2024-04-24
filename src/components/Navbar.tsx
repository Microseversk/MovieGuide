import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
	const nav = useNavigate()
	return (
		<MDBNavbar dark bgColor='dark'>
			<MDBContainer fluid className='ps-5'>
				<MDBNavbarBrand style={{ cursor: 'pointer' }} onClick={() => nav('/')}>
					Кино справочник
				</MDBNavbarBrand>
			</MDBContainer>
		</MDBNavbar>
	)
}

export default NavBar
