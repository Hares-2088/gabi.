import { Nav, Navbar } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

export default function MyNavBar() {

    const links = [
        {
            to:"",
            title:"Home",
        },
        {
            to:"albums",
            title:"Albums"
        }
    ]

    return(
        <Navbar style={{ backgroundImage: 'linear-gradient(to left, #80ced6, #7d7ff3)' }}>            
            <Container>
                
                {/* <LinkContainer to="/" style={{ cursor: 'pointer' }}>
                    <Navbar.Brand className='fs-2'>
                        <Image src="" alt="Logo" style={{ maxHeight: '3rem' }} />
                    </Navbar.Brand>
                </LinkContainer> */}

                <Nav className='fs-4'>
                    {links.map((link) => (
                        <LinkContainer to={`/${link.to}`} key={link.to}>
                            <Nav.Link>{link.title}</Nav.Link>
                        </LinkContainer>
                    ))}
                </Nav>

            </Container>
        </Navbar>
    )
}