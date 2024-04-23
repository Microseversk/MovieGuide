import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit'
import { useNavigate, useParams } from 'react-router-dom'

const Pagination = () => {
	const { page } = useParams()
	const nav = useNavigate()

	const onLinkClick = (page: number) => {
		nav(`/movies/${page}`)
	}

	return (
		<nav>
			<MDBPagination className='mb-0' size='lg'>
				<MDBPaginationItem
					style={{ cursor: 'pointer' }}
					onClick={() => onLinkClick(Number(page) > 1 ? Number(page) - 1 : 1)}>
					<MDBPaginationLink>
						<span>«</span>
					</MDBPaginationLink>
				</MDBPaginationItem>
				<MDBPaginationItem
					style={{ cursor: 'pointer' }}
					onClick={() => onLinkClick(Number(page) > 3 ? Number(page) - 2 : 1)}>
					<MDBPaginationLink>{Number(page) > 3 ? Number(page) - 2 : 1}</MDBPaginationLink>
				</MDBPaginationItem>
				<MDBPaginationItem
					style={{ cursor: 'pointer' }}
					onClick={() => onLinkClick(Number(page) > 3 ? Number(page) - 1 : 2)}>
					<MDBPaginationLink>{Number(page) > 3 ? Number(page) - 1 : 2}</MDBPaginationLink>
				</MDBPaginationItem>
				<MDBPaginationItem
					style={{ cursor: 'pointer' }}
					onClick={() => onLinkClick(Number(page) > 3 ? Number(page) : 3)}>
					<MDBPaginationLink>{Number(page) > 3 ? Number(page) : 3}</MDBPaginationLink>
				</MDBPaginationItem>
				<MDBPaginationItem style={{ cursor: 'pointer' }} onClick={() => onLinkClick(Number(page) + 1)}>
					<MDBPaginationLink>
						<span>»</span>
					</MDBPaginationLink>
				</MDBPaginationItem>
			</MDBPagination>
		</nav>
	)
}

export default Pagination
