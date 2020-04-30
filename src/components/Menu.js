import React from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Navbar, Nav, Button, ButtonGroup, DropdownButton, Dropdown, Image, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faCogs } from '@fortawesome/free-solid-svg-icons'
import { signOut } from '../reducers/userReducer'

const Menu = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const match = useRouteMatch('/login')

  const userButtons = (user) => {
    if (user === null) {
      return (
        <ButtonGroup aria-label="Login Group">
          <Button variant="outline-light" as={Link} to='/login'>Login</Button>{' '}
          <Button variant="outline-light" as={Link} to='/signup'>Sign Up</Button>
        </ButtonGroup>
      )
    } else {
      return (
        <div>
          <DropdownButton as={ButtonGroup} title={user.username} id="bg-nested-dropdown">
            <Dropdown.Item
              eventKey="1">
              <FontAwesomeIcon icon={faCogs} />
              Edit Profile
            </Dropdown.Item>
            <Dropdown.Item
              eventKey="2"
              onClick={() => { dispatch(signOut()) }}>
              <FontAwesomeIcon icon={faSignOutAlt} />
              Logout
            </Dropdown.Item>
          </DropdownButton>{' '}
          <Image
            height='30px'
            src="https://image.shutterstock.com/image-vector/avatar-vector-male-profile-gray-260nw-538707355.jpg"
            roundedCircle />
        </div>
      )
    }
  }

  return (
    <Navbar sticky="top" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>Survey</Navbar.Brand>

        {userButtons(user)}
      </Container>
    </Navbar>
  )
}

export default Menu
